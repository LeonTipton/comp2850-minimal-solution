**Student**: Leon Tipton 201807361 **Submission date**: 27/10/2025 **Academic Year**: 2025-26

---

## [Privacy & Ethics Statement](#privacy--ethics-statement){.header} {#privacy--ethics-statement}

- I confirm all participant data is anonymous (session IDs use P1_xxxx format, not real names)
- I confirm all screenshots are cropped/blurred to remove PII (no names, emails, student IDs visible)
- I confirm all participants gave informed consent
- I confirm this work is my own (AI tools used for code assistance are cited below)

**AI tools used** (if any): Used AI to help build the Light/Dark mode button as this is a quite a difficult implement.

Could not get a working implementation of the program - using given minimal version

---

## [1. Protocol & Tasks](../../comp2850-hci-starter/wk06/research/consent-protocol.md){.header} {#1-protocol--tasks}

### [Link to Needs-Finding (LO2)](../../comp2850-hci-starter/wk06/research/stories.md){.header}

**Week 6 Job Story #2**:

> ## Story S2: Confirmation Feedback
>
> **Situation**: When I submit a form (add/edit/delete task)
> **Motivation**: I want immediate, explicit confirmation that the action succeeded either verbally or through a readable popup
> **Outcome**: So I can trust the completeness of my action
> **Underlying need**: Because uncertainty about save status causes missed deadlines and unnecessary stress
>
> **Evidence**: Participant B (notes Q1, 3)
> **Inclusion risk**: Cognitive, Screenreader
> **Type**: Job story
> **WCAG**: 4.1.3 Status Messages (AA)

**How Task 1 tests this**: On submission of an entry, check for popup

---

### [Evaluation Tasks (4-5 tasks)](../../comp2850-hci-starter/backlog/backlog.csv){.header}

#### [Task 1 (T1): Check that a popup appears on control switch]{.header}

- **Scenario**: Navigate to add task and submit form
- **Action**: Go to add task, enter a value e.g. testing and click "Add Task" button
- **Success**: Page updates to show 'Task "\<task\>" added successfully.' at the top of the page
- **Target time**: 4s
- **Linked to**: Week 6 Job Story #2

#### [Task 2 (T2): Change contrast from light to dark]{.header}

- **Scenario**: On page load, contrast can switch from light to dark and vice versa
- **Action**: Load the webpage, change page contrast
- **Success**: All instructions, button labels, etc. easily readable in both themes
- **Target time**: 6s
- **Linked to**: Week 6 Job Story #1

#### [Task 3 (T3): No keyboard tap]{.header}

- **Scenario**: All content should be accessible via keyboard only interaction
- **Action**:Use tab key to navigate around the entire page
- **Success**: Blue box highlighting location travels around page elements on keypress
- **Target time**: 10-12s
- **Linked to**: [WCAG 2.1.2 No Keyboard Tap (A)](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html)

#### [Task 4 (T4): On input]{.header}

- **Scenario**: When navigating to components, no change will occur on hover
- **Action**: Navigate around the page with either keyboard only movements or mouse movements.
- **Success**: No change to the page until either left mouseclick or enter keypress on an interactive element
- **Target time**: 14-16s
- **Linked to**: [WCAG 3.2.2 On Input (A)](https://www.w3.org/WAI/WCAG22/Understanding/on-input.html)

#### [Task 5 (T5): View contrast between foreground and background in dark mode]{.header}

- **Scenario**: On page load, is there a good foreground/background contrast
- **Action**: Change browser settings to force darkmode, load the webpage
- **Success**: All instructions, button labels, etc. easily readable
- **Target time**: 2s
- **Linked to**: Week 6 Job Story #1

#### [Task 6 (T6): Subtitles when screenreader speaks]{.header}

- **Scenario**: When screenreader is used, everything said appears as a subtitle of sufficient font size
- **Action**: Perform an action on the task manager and confirm that the screenreader both speaks and the spoken words appears on the screen as closed subtitles
- **Success**: sr speaks with subtitles appearing
- **Target time**: 8s
- **Linked to**: Week 6 Job Story #5

---

### [Consent Script (They Read Verbatim)]{.header}

**Introduction**: "Thank you for participating in my HCI evaluation. This will take about 15 minutes. I'm testing my task management interface, not you. There are no right or wrong answers."

**Rights**:

- "Your participation is voluntary. You can stop at any time without giving a reason."
- "Your data will be anonymous. I'll use a code (like P1) instead of your name."
- "I may take screenshots and notes. I'll remove any identifying information."
- "Do you consent to participate?" \[Wait for verbal yes\]

**Recorded consent timestamp**: P1 consented 01/12/2025 13:30, P2 consented 6/12/2025

---

## [2. Findings Table](./evidence/findings-table.csv){.header} {#2-findings-table}

**Instructions**: Fill in this table with 3-5 findings from your pilots. Link each finding to data sources.

| Finding                                      | Data Source                | Observation (Quote/Timestamp)             | WCAG  | Impact (1-5) | Inclusion (1-5) | Effort (1-5) | Priority |
| -------------------------------------------- | -------------------------- | ----------------------------------------- | ----- | ------------ | --------------- | ------------ | -------- |
| Comment appears as required                  | T1_evidence.png            | "topline comment appears on submit"       | 4.1.3 | 1            | 1               | 1            | 1        |
| No method implemented to swap colour schemes | P1 notes + T2_evidence.png | "no way of changing theme in the webpage" | 1.4.3 | 4            | 3               | 2            | 5        |
| Controlling page with tabs/enter easy        | T3_evidence.png            | "easy to navigate around page"            | 2.1.2 | 1            | 1               | 1            | 1        |
| ...                                          | ...                        | ...                                       | ...   | ...          | ...             | ...          | ...      |

**Priority formula**: (Impact + Inclusion) - Effort

**Top 3 priorities for redesign**:

1.  SR speaks but no subtitles
2.  Updating task counter
3.  No method for theme change

**How to complete this table** (decision tree):

1.  **Identify finding**: From pilot observations, metrics.csv anomalies (high times, errors), or WCAG violations
2.  **Link data source**: Cite specific metrics.csv line numbers (e.g., "L47-49") OR pilot notes timestamps (e.g., "P2 notes 14:23")
3.  **Check WCAG**: If accessibility-related, find the criterion using [W3C WCAG 2.2 Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/)
4.  **Score priority**: Use [Week 10 Lab 1 prioritisation scales](../../comp2850-hci-starter/wk10/wk10-lab1-analysis-prioritisation.html#prioritisation-framework) to rate Impact (1-5), Inclusion (1-5), Effort (1-5), then calculate Priority = (Impact + Inclusion) - Effort

---

## [3. Pilot Metrics (metrics.csv)](../data/metrics.csv){.header} {#3-pilot-metrics-metricscsv}

**Instructions**: Paste your raw CSV data here OR attach metrics.csv file

> [metrics.csv](../data/metrics.csv)

**Participant summary**:

- **P1**: Variant - "Standard mouse + HTMX"
- **P2**: Variant - "Keyboard only + js off"

**Total participants**: 2

---

## [4. Implementation Diffs](#4-implementation-diffs){.header} {#4-implementation-diffs}

**Instructions**: Show before/after code for 1-3 fixes. Link each to findings table.

---

### [Fix 1: Updaing page to include a mode switching button](#fix-1-fix-name){.header}

**Addresses finding**: 2 (No method implemented to swap colour schemes)

**Before**:

No prior implementation

---

**After**:

```html
<!-- body.peb -->
<script src="/static/js/theme-toggle.js"></script>

<!-- _nav.peb -->
<li>
  <button
    id="theme-toggle"
    class="theme-toggle-container"
    type="button"
    aria-pressed="false"
    aria-label="Toggle dark mode"
  >
    Dark
  </button>
</li>

<!-- index.peb -->
<article id="main-article"></article>
```

```js
(function () {
  const storageKey = "theme";
  const className = "dark";

  function applyThemeFromStorage() {
    const saved = localStorage.getItem(storageKey);
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const useDark = saved ? saved === "dark" : prefersDark;
    if (useDark) document.documentElement.classList.add(className);
  }

  function updateToggleButton(btn) {
    if (!btn) return;
    const isDark = document.documentElement.classList.contains(className);
    btn.setAttribute("aria-pressed", isDark ? "true" : "false");
    btn.textContent = isDark ? "Light" : "Dark";
  }

  function toggleTheme(evt) {
    const btn =
      evt && evt.currentTarget
        ? evt.currentTarget
        : document.getElementById("theme-toggle");
    const isNowDark = document.documentElement.classList.toggle(className);
    localStorage.setItem(storageKey, isNowDark ? "dark" : "light");
    updateToggleButton(btn);
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyThemeFromStorage();
    const btn = document.getElementById("theme-toggle");
    updateToggleButton(btn);
    if (btn) btn.addEventListener("click", toggleTheme);
  });
})();
```

```css
/* ========================================
   Theme toggle and dark mode
   ======================================== */
.theme-toggle-container {
  display: inline-block;
  margin-left: 1rem;
}

#theme-toggle {
  background: #1976d2;
  color: #fff;
  border: none;
  padding: 0.35rem 0.6rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
}

/* Dark theme overrides when `dark` class is added to <html> */
html.dark body {
  background: #121212;
  color: #e6e6e6;
}

html.dark a {
  color: #90caf9;
}

html.dark .task-item {
  background: #1e1e1e;
  border-color: #333;
}

html.dark #status {
  background: #263238;
  border-left-color: #90caf9;
  color: #e1f5fe;
}

html.dark .task-item .task-title {
  color: #fff;
}

html.dark #theme-toggle {
  background: #90caf9;
  color: #000;
}

/* Make form controls follow dark theme so forms don't stay light */
html.dark input,
html.dark textarea,
html.dark select,
html.dark .form-control {
  background-color: #222 !important;
  border: 1px solid #444 !important;
  color: #e6e6e6 !important;
}

html.dark input::placeholder,
html.dark textarea::placeholder {
  color: #9e9e9e !important;
  opacity: 1;
}

html.dark label {
  color: #dcdcdc;
}

html.dark option {
  background: #222;
  color: #e6e6e6;
}

/* Card / panel backgrounds used by forms */
html.dark .card,
html.dark fieldset,
html.dark form {
  background: #181818;
  border-color: #2b2b2b;
  color: #e6e6e6;
}

/* Autofill fixes for Chrome-based browsers */
html.dark input:-webkit-autofill,
html.dark textarea:-webkit-autofill,
html.dark select:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 30px #222 inset !important;
  box-shadow: 0 0 0 30px #222 inset !important;
  -webkit-text-fill-color: #e6e6e6 !important;
}

/* Ensure primary buttons remain readable in dark mode */
html.dark button {
  background: #1976d2 !important;
  color: #fff !important;
  border: 1px solid #2b6fa6 !important;
}

/* Ensure article/main content follows dark theme */
html.dark main,
html.dark .container,
html.dark #main-article,
html.dark .content,
html.dark .lead,
html.dark .card,
html.dark .panel {
  background: #121212;
  color: #e6e6e6;
}

html.dark h1,
html.dark h2,
html.dark h3,
html.dark h4,
html.dark h5,
html.dark h6 {
  color: #fff;
}

html.dark p,
html.dark li,
html.dark dd,
html.dark dt {
  color: #dcdcdc;
}

html.dark blockquote {
  background: #161616;
  border-left: 4px solid #333;
  color: #e0e0e0;
}

html.dark pre,
html.dark code {
  background: #0f0f0f;
  color: #e6e6e6;
  border: 1px solid #222;
}

html.dark table {
  background: #141414;
  color: #e6e6e6;
  border-color: #2a2a2a;
}

html.dark th,
html.dark td {
  border-color: #2a2a2a;
}

html.dark hr {
  border-color: #2a2a2a;
}

/* Try to override Pico variables when in dark mode for wider coverage */
html.dark {
  --pico-background: #121212;
  --pico-foreground: #e6e6e6;
  --pico-muted-color: #9e9e9e;
  --pico-card-background-color: #1b1b1b;
  --pico-muted-border-color: #2a2a2a;
  --pico-primary: #90caf9;
}

/* Ensure the article header area also gets a dark background and readable text */
html.dark #main-article > header {
  background: #161616 !important;
  color: #ffffff !important;
  border-bottom: 1px solid #262626 !important;
}

html.dark #main-article > header h1,
html.dark #main-article > header p {
  color: #ffffff !important;
}

/* If the header contains small or lead text, style that too */
html.dark #main-article > header small,
html.dark #main-article > header .lead {
  color: #d0d0d0 !important;
}
```

**What changed**: Added a button by Tasks and Health hyperlinks to switch from light to dark mode and vice versa

**Why**: This imporves accessibility for people with sensitive eyes who may not know how to change browser settings

**Impact**: Impoves UX as more people especially those with sensitive eyes can access the site.

The theme is stored locally and will persist between running versions

---

### [Fix 2: Adding details](#fix-2-fix-name){.header}

**Addresses finding**: No way of adding details to each task

**Before**:

[TaskRepository.kt (28-37; 46-47; 75)](../src/main/kotlin/data/TaskRepository.kt):

```kotlin
// 28-37
init {
    file.parentFile?.mkdirs()
    if (!file.exists()) {
        file.writeText("id,title\n")
    } else {
        file.readLines().drop(1).forEach { line ->
            val parts = line.split(",", limit = 2)
            if (parts.size == 2) {
                val id = parts[0].toIntOrNull() ?: return@forEach
                tasks.add(Task(id, parts[1]))
                idCounter.set(maxOf(idCounter.get(), id + 1))
            }
        }
    }
}

// 46-47
fun add(title: String): Task {
    val task = Task(idCounter.getAndIncrement(), title)
    ...

// 75
file.writeText("id,title\n" + tasks.joinToString("\n") { "${it.id},${it.title}" })
```

[Task.kt (83; 101-107)](../src/main/kotlin/model/Task.kt):

```kotlin
// 83
return "$id,\"$escapedTitle\",$completed,${createdAt.format(formatter)}"

// 101-107
mapOf(
    "id" to id,
    "title" to title,
    "completed" to completed,
    "createdAt" to createdAt.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm")),
    "createdAtISO" to createdAt.format(DateTimeFormatter.ISO_LOCAL_DATE_TIME),
)
```

[TaskRoutes.kt (82-91; 123; 293-294; 338; 357)](../src/main/kotlin/routes/TaskRoutes.kt):

```kotlin
// 82-91
timed("T3_add", jsMode()) {
    val params = receiveParameters()
    val title = params["title"]?.trim() ?: ""
    val query = params["q"].toQuery()

    when (val validation = Task.validate(title)) {
        is ValidationResult.Error -> handleCreateTaskError(store, title, query, validation)
        ValidationResult.Success -> handleCreateTaskSuccess(store, title, query)
    }
}

// 123
val task = Task(title = title)

// missing implementation of function

// 293-294: the combination of """ """ and "" broke formatter
// val ariaLive = if (isError) """ aria-live="assertive"""" else """ aria-live="polite""""
// val cssClass = if (isError) """ class="error"""" else ""

// 338
val newTitle = receiveParameters()["title"]?.trim() ?: ""

// 357
val updated = task.copy(title = newTitle)
```

[TaskStore.kt (36; 54; 75-76; 209; 231)](../src/main/kotlin/storage/TaskStore.kt):

```kotlin
// 36
.setHeader("id", "title", "completed", "created_at")

// 54
printer.printRecord("id", "title", "completed", "created_at")

// 75-76
completed = record[2].toBoolean(),
createdAt = LocalDateTime.parse(record[3], DateTimeFormatter.ISO_LOCAL_DATE_TIME),

// 209
printer.printRecord("id", "title", "completed", "created_at")

// 231
printer.printRecord("id", "title", "completed", "created_at")
```

[custom.css](../src/main/resources/static/css/custom.css):

missing implementation

\_details.peb - missing file

[\_edit.peb](../src/main/resources/templates/tasks/_edit.peb):

missing implementaion

[\_item.peb](../src/main/resources/templates/tasks/_item.peb):

missing implementation

---

**After** (\[file path:line number\]):

Altered test csv

```kotlin
// ✅ Fixed code
[Paste your improved code here]
```

**What changed**: \[1 sentence - what you added/removed/modified\]

**Why**: \[1 sentence - which WCAG criterion or usability issue this fixes\]

**Impact**: \[1-2 sentences - how this improves UX, who benefits\]

---

## [5. Verification Results](#5-verification-results){.header} {#5-verification-results}

### [Part A: Regression Checklist (20 checks)](#part-a-regression-checklist-20-checks){.header}

**Instructions**: Test all 20 criteria. Mark pass/fail/n/a + add notes.

::: table-wrapper
+------------------+---------------------------------------+-------------+-------------------+----------------------------------------------------------------+
| Check | Criterion | Level | Result | Notes |
+==================+=======================================+=============+===================+================================================================+
| **Keyboard (5)** | | | | |
+------------------+---------------------------------------+-------------+-------------------+----------------------------------------------------------------+
| K1 | 2.1.1 All actions keyboard accessible | A | \[pass/fail\] | \[e.g., "Tested Tab/Enter on all buttons"\] |
+------------------+---------------------------------------+-------------+-------------------+----------------------------------------------------------------+
| K2 | 2.4.7 Focus visible | AA | \[pass/fail\] | \[e.g., "2px blue outline on all interactive elements"\] |
+------------------+---------------------------------------+-------------+-------------------+----------------------------------------------------------------+
| K3 | No keyboard traps | A | \[pass/fail\] | \[e.g., "Can Tab through filter, edit, delete without traps"\] |
+------------------+---------------------------------------+-------------+-------------------+----------------------------------------------------------------+
| K4 | Logical tab order | A | \[pass/fail\] | \[e.g., "Top to bottom, left to right"\] |
+------------------+---------------------------------------+-------------+-------------------+----------------------------------------------------------------+
| K5 | Skip links present | AA | \[pass/fail/n/a\] | \[e.g., "Skip to main content works"\] |
+------------------+---------------------------------------+-------------+-------------------+----------------------------------------------------------------+
| **Forms (3)** | | | | |
+------------------+---------------------------------------+-------------+-------------------+----------------------------------------------------------------+
| F1 | 3.3.2 Labels present | A | \[pass/fail\] | \[e.g., "All inputs have or aria-label"\] |
+------------------+---------------------------------------+-------------+-------------------+----------------------------------------------------------------+
| F2 | 3.3.1 Errors identified | A | \[pass/fail\] | \[e.g., "Errors have role=alert (FIXED in Fix #1)"\] |
+------------------+---------------------------------------+-------------+-------------------+----------------------------------------------------------------+
| F3 | 4.1.2 Name/role/value | A | \[pass/fail\] | \[e.g., "All form controls have accessible names"\] |
+------------------+---------------------------------------+-------------+-------------------+----------------------------------------------------------------+
| **Dynamic (3)** | | | | |
+------------------+---------------------------------------+-------------+-------------------+----------------------------------------------------------------+
| D1 | 4.1.3 Status messages | AA | \[pass/fail\] | \[e.g., "Status div has role=status"\] |
+------------------+---------------------------------------+-------------+-------------------+----------------------------------------------------------------+
| D2 | Live regions work | AA | \[pass/fail\] | \[e.g., "Tested with NVDA, announces 'Task added'"\] |
+------------------+---------------------------------------+-------------+-------------------+----------------------------------------------------------------+
| D3 | Focus management | A | \[pass/fail\] | \[e.g., "Focus moves to error summary after submit"\] |
+------------------+---------------------------------------+-------------+-------------------+----------------------------------------------------------------+
| **No-JS (3)** | | | | |
+------------------+---------------------------------------+-------------+-------------------+----------------------------------------------------------------+
| N1 | Full feature parity | --- | \[pass/fail\] | \[e.g., "All CRUD ops work without JS"\] |
+------------------+---------------------------------------+-------------+-------------------+----------------------------------------------------------------+
| N2 | POST-Redirect-GET | --- | \[pass/fail\] | \[e.g., "No double-submit on refresh"\] |
+------------------+---------------------------------------+-------------+-------------------+----------------------------------------------------------------+
| N3 | Errors visible | A | \[pass/fail\] | \[e.g., "Error summary shown in no-JS mode"\] |
+------------------+---------------------------------------+-------------+-------------------+----------------------------------------------------------------+
| **Visual (3)** | | | | |
+------------------+---------------------------------------+-------------+-------------------+----------------------------------------------------------------+
| V1 | 1.4.3 Contrast minimum | AA | \[pass/fail\] | \[e.g., "All text 7.1:1 (AAA) via CCA"\] |
+------------------+---------------------------------------+-------------+-------------------+----------------------------------------------------------------+
| V2 | 1.4.4 Resize text | AA | \[pass/fail\] | \[e.g., "200% zoom, no content loss"\] |
+------------------+---------------------------------------+-------------+-------------------+----------------------------------------------------------------+
| V3 | 1.4.11 Non-text contrast | AA | \[pass/fail\] | \[e.g., "Focus indicator 4.5:1"\] |
+------------------+---------------------------------------+-------------+-------------------+----------------------------------------------------------------+
| **Semantic (3)** | | | | |
+------------------+---------------------------------------+-------------+-------------------+----------------------------------------------------------------+
| S1 | 1.3.1 Headings hierarchy | A | \[pass/fail\] | \[e.g., "h1 → h2 → h3, no skips"\] |
+------------------+---------------------------------------+-------------+-------------------+----------------------------------------------------------------+
| S2 | 2.4.1 Bypass blocks | A | \[pass/fail\] | \[e.g., " |
| | | | | |
| | | | | ::: {role="main"} |
| | | | | landmark, |
| | | | | |
| | | | | for filter"\] |
| | | | | ::: |
+------------------+---------------------------------------+-------------+-------------------+----------------------------------------------------------------+
| S3 | 1.1.1 Alt text | A | \[pass/fail\] | \[e.g., "No images in interface OR all have alt"\] |
+------------------+---------------------------------------+-------------+-------------------+----------------------------------------------------------------+
:::

**Summary**: \[X/20 pass\], \[Y/20 fail\] **Critical failures** (if any): \[List any Level A fails\]

---

### [Part B: Before/After Comparison](#part-b-beforeafter-comparison){.header}

**Instructions**: Compare Week 9 baseline (pre-fix) to Week 10 (post-fix). Show improvement.

::: table-wrapper
Metric Before (Week 9, n=X) After (Week 10, n=Y) Change Target Met?

---

SR error detection \[e.g., 0/2 (0%)\] \[e.g., 2/2 (100%)\] \[e.g., +100%\] \[✅/❌\]
Validation error rate \[e.g., 33%\] \[e.g., 0%\] \[e.g., -33%\] \[✅/❌\]
Median time \[Task X\] \[e.g., 1400ms\] \[e.g., 1150ms\] \[e.g., -250ms\] \[✅/❌\]
WCAG \[criterion\] pass \[fail\] \[pass\] \[--- \] \[✅/❌\]
:::

**Re-pilot details**:

- **P5** (post-fix): \[Variant - e.g., "Screen reader user, NVDA + keyboard"\] - \[Date piloted\]
- **P6** (if applicable): \[Variant\] - \[Date\]

**Limitations / Honest reporting**: \[If metrics didn't improve or only modestly: explain why. Small sample size? Wrong fix? Needs more iteration? Be honest - valued over perfect results.\]

---

## [6. Evidence Folder Contents](#6-evidence-folder-contents){.header} {#6-evidence-folder-contents}

**Instructions**: List all files in your evidence/ folder. Provide context.

### [Screenshots](#screenshots){.header}

::: table-wrapper
Filename What it shows Context/Link to finding

---

before-sr-error.png Error message without role="alert" Finding #1 - SR errors not announced
after-sr-error.png Error message WITH role="alert" added Fix #1 verification
regression-axe-report.png axe DevTools showing 0 violations Verification Part A
\[your-screenshot-3.png\] \[Description\] \[Which finding/fix this supports\]
:::

**PII check**:

- All screenshots cropped to show only relevant UI
- Browser bookmarks/tabs not visible
- Participant names/emails blurred or not visible

---

### [Pilot Notes](#pilot-notes){.header}

**Instructions**: Attach pilot notes as separate files (P1-notes.md, P2-notes.md, etc.). Summarize key observations here.

**P1** (\[ Variant - e.g., "Standard mouse + HTMX"\]):

- **Key observation 1**: \[Quote + timestamp - e.g., "Struggled with filter button (09:47)"\]
- **Key observation 2**: \[Quote + timestamp\]

**P2** (\[Variant\]):

- **Key observation 1**: \[Quote + timestamp\]
- **Key observation 2**: \[Quote + timestamp\]

\[Repeat for P3, P4 if applicable\]

---

## [Evidence Chain Example (Full Trace)](#evidence-chain-example-full-trace){.header}

**Instructions**: Pick ONE finding and show complete evidence trail from data → fix → verification.

**Finding selected**: \[e.g., "Finding #1 - SR errors not announced"\]

**Evidence trail**:

1.  **Data**: metrics.csv lines 47-49 show P2 (SR user) triggered validation_error 3 times
2.  **Observation**: P2 pilot notes timestamp 14:23 - Quote: "I don't know if it worked, didn't hear anything"
3.  **Screenshot**: before-sr-error.png shows error message has no role="alert" or aria-live
4.  **WCAG**: 3.3.1 Error Identification (Level A) violation - errors not programmatically announced
5.  **Prioritisation**: findings-table.csv row 1 - Priority score 7 (Impact 5 + Inclusion 5 - Effort 3)
6.  **Fix**: implementation-diffs.md Fix #1 - Added role="alert" + aria-live="assertive" to error span
7.  **Verification**: verification.csv Part A row F2 - 3.3.1 now PASS (tested with NVDA)
8.  **Before/after**: verification.csv Part B - SR error detection improved from 0% to 100%
9.  **Re-pilot**: P5 (SR user) pilot notes - "Heard error announcement immediately, corrected and succeeded"

**Complete chain**: Data → Observation → Interpretation → Fix → Verification ✅

---

## [Submission Checklist](#submission-checklist){.header}

Before submitting, verify:

**Files**:

- This completed template (submission-template.md)
- metrics.csv (or pasted into Section 3)
- Pilot notes (P1-notes.md, P2-notes.md, etc. OR summarised in Section 6)
- Screenshots folder (all images referenced above)
- Privacy statement signed (top of document)

**Evidence chains**:

- findings-table.csv links to metrics.csv lines AND/OR pilot notes timestamps
- implementation-diffs.md references findings from table
- verification.csv Part B shows before/after for fixes

**Quality**:

- No PII in screenshots (checked twice!)
- Session IDs anonymous (P1_xxxx format, not real names)
- Honest reporting (limitations acknowledged if metrics didn't improve)
- WCAG criteria cited specifically (e.g., "3.3.1" not just "accessibility")

**Pass criteria met**:

- n=2+ participants (metrics.csv has 2+ session IDs)
- 3+ findings with evidence (findings-table.csv complete)
- 1-3 fixes implemented (implementation-diffs.md shows code)
- Regression complete (verification.csv has 20 checks)
- Before/after shown (verification.csv Part B has data)

---

**Ready to submit?** Upload this file + evidence folder to Gradescope by end of Week 10.

**Estimated completion time**: 12-15 hours across Weeks 9-10

**Good luck!**
