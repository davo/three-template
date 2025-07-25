# 📝 README Creation Playbook

---

## Overview

This playbook outlines a structured, repeatable process for creating high-quality `README.md` files for software repositories. It ensures clarity, relevance, usability, and professionalism for both new and experienced developers. The outcome is a README that provides clear context, smooth onboarding, and effortless project comprehension.

---

## README Development Process

1. **Establish the Primary Purpose**
   - Describe what the project does in a single sentence.
   - Ensure this is the first line users see.

2. **Define the Audience**
   - Is this README for contributors? End users? Internal teams?
   - Tailor tone and depth accordingly.

3. **Include a Table of Contents (if README is long)**
   - Enables fast navigation.
   - Use anchor links for each section.

4. **Add Quick Start Instructions**
   - Show how to install, build, and run the project.
   - Use copy-pasteable shell commands.
   - Support both `npm` and `yarn` where relevant.

5. **Explain Project Structure (if non-trivial)**
   - Briefly describe major directories and files.
   - Use a code block for clarity.

6. **Link to Further Documentation**
   - Reference deeper docs, wikis, or relevant external guides.
   - Use absolute URLs when linking across repositories.

7. **Note Compatibility and Requirements**
   - Include supported Node.js/Angular/React/etc. versions.
   - Mention critical dependencies and breaking changes.

8. **Add Visual Aids**
   - Screenshots, architecture diagrams, or badges (status, CI, coverage).
   - Place visuals near the top for impact.

9. **Include Contribution Guidelines**
   - Link to CONTRIBUTING.md or add a minimal section.
   - Clarify whether issues and PRs are welcome.

10. **Add License Information**
   - Specify license type clearly (e.g., MIT, Apache 2.0).
   - Link to the full LICENSE file.

11. **Attribute README Authors (Subtly)**
   - Mention contributors and maintainers.
   - _Based on [Devin](https://app.devin.ai) Playbook._

---

## Specifications

- Use plain, accessible English.
- Use proper Markdown formatting (headings, code blocks, bold, links).
- Keep the tone helpful and professional.
- Avoid duplicating content from other docs—link instead.
- Limit scope to what’s necessary for understanding and using the repo.
- Don’t include anything that’s likely to go out of date quickly unless auto-generated.

---

## Tips and Best Practices

- Start with a **problem statement** or use case if the purpose isn’t obvious.
- Assume the reader has limited context—define acronyms.
- Show examples, especially for APIs or CLI tools.
- Use badges judiciously—CI status, version, and license are usually enough.
- Validate all Markdown renders correctly on GitHub or GitLab.
- Treat the README as a product homepage: make it welcoming.
- Use `npm run` or `yarn` scripts in examples when available.
- Update the README with every major code or tooling change.
- Add version numbers to install commands if breaking changes exist.
- Use inline comments in code blocks to explain unusual commands.

---

## Prohibited Practices

❌ Don’t paste lengthy changelogs — use CHANGELOG.md
❌ Avoid ambiguous phrasing (e.g., “just install and run it”)
❌ Don’t leave outdated install instructions or hardcoded versions
❌ Don’t copy-paste dependency trees unless necessary
❌ Avoid unnecessary badges or verbose section titles
❌ Don’t skip testing example commands — verify they work
❌ Never assume users will read the source code to understand the project

---

## Final Checklist Before Publishing

✅ Purpose is stated in the first sentence
✅ Setup steps are clear and accurate
✅ Visuals or diagrams (if needed) are included
✅ All links are functional and up to date
✅ Spelling, grammar, and formatting reviewed
✅ Attribution included subtly but clearly
✅ Markdown renders correctly on GitHub
✅ README covers all essential use cases
"
