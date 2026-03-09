import os
import re

files = [
    r"d:\DWEBPIXEL\practice\AI\AI Project\MH Finance\mh-finance-vue\src\views\About.vue",
    r"d:\DWEBPIXEL\practice\AI\AI Project\MH Finance\mh-finance-vue\src\views\Blog.vue",
    r"d:\DWEBPIXEL\practice\AI\AI Project\MH Finance\mh-finance-vue\src\views\Careear.vue"
]

for file_path in files:
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    body_match = re.search(r"<body([^>]*)>", content)
    body_attrs = body_match.group(1) if body_match else ""

    body_content_match = re.search(r"<body[^>]*>([\s\S]*?)</body>", content, re.IGNORECASE)
    if not body_content_match:
        print("No body found for", file_path)
        continue
    body_content = body_content_match.group(1).strip()

    style_match = re.search(r"<style>([\s\S]*?)</style>", content, re.IGNORECASE)
    styles = style_match.group(1).strip() if style_match else ""
    styles = re.sub(r"body\s*\{[^}]*\}", "", styles).strip()

    vue_content = f"<template>\n  <div{body_attrs}>\n    {body_content}\n  </div>\n</template>\n\n<script setup>\n</script>\n"
    if styles:
        vue_content += f"\n<style scoped>\n{styles}\n</style>"

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(vue_content)
    print("Converted", file_path)
