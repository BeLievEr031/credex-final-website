#!/usr/bin/env python3
import json
from bs4 import BeautifulSoup, NavigableString

input_path = "artical.html"
output_path = "artical_parsed.json"

with open(input_path, "r", encoding="utf-8") as f:
    html = f.read()

soup = BeautifulSoup(html, "html.parser")

data = []

# Recursive function to extract content in document order
def extract_from(element):
    for child in element.children:
        # Skip text nodes
        if isinstance(child, NavigableString):
            continue
        
        # For figures, extract images from within them (don't recurse into figure)
        if child.name == "figure":
            for img in child.find_all("img"):
                src = img.get("src", "").strip()
                if src:
                    data.append({"img": src})
        elif child.name == "h1":
            txt = child.get_text(separator=" ", strip=True)
            if txt:
                data.append({"h1": txt})
        elif child.name == "h2":
            txt = child.get_text(separator=" ", strip=True)
            if txt:
                data.append({"h2": txt})
        elif child.name == "p":
            txt = child.get_text(separator=" ", strip=True)
            if txt:
                data.append({"p": txt})
        elif child.name == "img":
            src = child.get("src", "").strip()
            if src:
                data.append({"img": src})
        elif child.name == "ul":
            lis = [li.get_text(separator=" ", strip=True) for li in child.find_all("li")]
            if lis:
                data.append({"ul": lis})
        else:
            # Recursively process other elements
            extract_from(child)

# Start extraction from the root
extract_from(soup)

out = {"data": data}

with open(output_path, "w", encoding="utf-8") as f:
    json.dump(out, f, ensure_ascii=False, indent=2)

print(f"Written {len(data)} entries to {output_path}")
