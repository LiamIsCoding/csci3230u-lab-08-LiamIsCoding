# AI-USAGE.md — Lab 08

This is the **one lab where you may use an AI agent to *generate* code** (it follows the
week-8 AI lecture). With that permission comes documentation: log **every** time AI
produced or edited code you submit — **before** you commit it. Using AI only to *learn*
(explanations, error messages, design talk) needs no entry.

**Free models only.** Drop a marker where AI-assisted code lives:
`// AI-assisted — see AI-USAGE.md #N`. Full rules: `project/ai-policy.md`.

---

## Log (one entry per AI use — copy the block for each)

### #1 — Controlled Form Input
- **Date:** 2026-11-17
- **Tool / model:** Gemini (Free Tier)
- **Files:** `src/...`
- **Prompt (verbatim):**

  ```
  here are all my code files as txts and a readme, where do I start with this lab
  ```

- **What it produced & what I kept / changed / rejected:** 
  ```
  Told me that I need to start by adding useState, gave me the import line, and a todo list including adding a const for the state, and also making changes to the handle submit function, instead of an input and text variables, it uses the state of the text. 
  I kept everything for the most part as it was minimal and correct, my only change was the variable name, from just trimmed to trimmedText for readibility.
  ```

### #2 — Derived State and Filter Buttons
- **Date:** 2026-11-17
- **Tool / model:** Gemini (Free Tier)
- **Files:** `src/...`
- **Prompt (verbatim):**

  ```
  for the next readme requirement, highlight what needs to be changed, on lines to be removed preface with a -- on lines to be added preface with a ++
  ```

- **What it produced & what I kept / changed / rejected:** 
  ```
  Produced the derived state calculation `filteredTodos` and the filter buttons container for `App.jsx`. Kept the derived state filtering, but changed the third button's text from "Done" to "Completed" because the Vitest test suite specifically searched for a button matching completed. I added the filter for if the button should be active or not based on the current filter selection.
  ```

---



## Reflection (required)

- **What did the agent get wrong, or do awkwardly?** (2–3 sentences. e.g. it mutated
  state instead of copying, used a stale/old React idiom, missed an edge case, or
  over-engineered something simple.)

  It doesnt always listen. When first giving it the files it assumed I wanted it to complete the whole thing right away. Sometimes you need to ask it multiple times to get a useable result. it can be clunky but also, if you sit with it for long enough for it to "get" what you want it to do, it becomes a very fast tool to find what the next thing you need to do is. You can get it to explain lines of code, or what certein jargon means. 

- **Explain-every-line check:** I can explain every line of the AI-assisted code in this
  lab and why it's correct. ☐  *(Your TA may ask you to walk through any of it.)*
