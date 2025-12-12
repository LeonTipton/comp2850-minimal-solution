**Student**: Leon Tipton 201807361 **Submission date**: 27/10/2025 **Academic Year**: 2025-26

---

## [Privacy & Ethics Statement](#privacy--ethics-statement){.header} {#privacy--ethics-statement}

- I confirm all participant data is anonymous (session IDs use P1_xxxx format, not real names)
- I confirm all screenshots are cropped/blurred to remove PII (no names, emails, student IDs visible)
- I confirm all participants gave informed consent
- I confirm this work is my own (AI tools used for code assistance are cited below)

**AI tools used** (if any): Used AI to help build the Light/Dark mode button as this is a quite a difficult implement - mainly for css colouring to adhere to 1.4.3 and the js to improve functionality (Change the writing on the button as mode changes)
Could not get a working implementation of the program - using given minimal version

---

## [1. Protocol & Tasks](./evidence/consent-protocol.md){.header} {#1-protocol--tasks}

### [Link to Needs-Finding (LO2)](./evidence/stories.md){.header}

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

### [Evaluation Tasks (4-5 tasks)](./evidence/backlog.csv){.header}

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
- "All session IDs will be denoted as PX_xxx, where PX is your code (e.g. P1) and xxx is a randomly generated string of characters."
- "I may take screenshots and notes. I'll remove any identifying information."
- "Do you consent to participate?" \[Wait for verbal yes\]

**Recorded consent timestamp**: P1 consented 01/12/2025 13:30, P2 consented 06/12/2025 12:00

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
2.  No method for theme change
3.  Add details input

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

### [Fix 1: Updating page to include a mode switching button](#fix-1-fix-name){.header}

**Addresses finding**: 2 (No method implemented to swap colour schemes)

**Before**:

No prior implementation

---

**After**:

[body.peb](../src/main/resources/templates/_layout/base.peb):

```html
...
<script src="/static/js/theme-toggle.js"></script>
...
```

[\_nav.peb](../src/main/resources/templates/_layout/_nav.peb):

```html
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
```

[index.peb](../src/main/resources/templates/tasks/index.peb):

```html
<article id="main-article">...</article>
```

[theme-toggle.js](../src/main/resources/static/js/theme-toggle.js):

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

[custom.css](../src/main/resources/static/css/custom.css):

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

**Impact**: Impoves UX as more people especially those with sensitive eyes can access the site. (1.4.3 improvement, 1.4.8 improvement)

The theme is stored locally and will persist between running versions

---

### [Fix 2: Adding details](#fix-2-fix-name){.header}

**Addresses finding**: No way of adding details to each task

**Before**:

[TaskRepository.kt (12-15; 28-37; 46-47; 75)](../src/main/kotlin/data/TaskRepository.kt):

```kotlin
// 12-15
data class Task(
    val id: Int,
    var title: String,
)

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

[TaskRoutes.kt (33-45; 82-91; 123; 293-294; 338; 357)](../src/main/kotlin/routes/TaskRoutes.kt):

```kotlin
// 33-45
fun Routing.configureTaskRoutes(store: TaskStore = TaskStore()) {
    get("/tasks") { call.handleTaskList(store) }
    get("/") { call.respondRedirect("/tasks") }
    get("/tasks/fragment") { call.handleTaskFragment(store) }
    post("/tasks") { call.handleCreateTask(store) }
    get("/tasks/{id}/edit") { call.handleEditTask(store) }
    post("/tasks/{id}/edit") { call.handleUpdateTask(store) }
    get("/tasks/{id}/view") { call.handleViewTask(store) }
    post("/tasks/{id}/toggle") { call.handleToggleTask(store) }
    delete("/tasks/{id}") { call.handleDeleteTask(store) }  // HTMX path (RESTful)
    post("/tasks/{id}/delete") { call.handleDeleteTask(store) }  // No-JS fallback
    get("/tasks/search") { call.handleSearchTasks(store) }
}

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
val ariaLive = if (isError) """ aria-live="assertive"""" else """ aria-live="polite""""
val cssClass = if (isError) """ class="error"""" else ""

// 338
val newTitle = receiveParameters()["title"]?.trim() ?: ""

// 357
val updated = task.copy(title = newTitle)
```

[TaskStore.kt (36; 54; 75-76; 121-128; 209; 231)](../src/main/kotlin/storage/TaskStore.kt):

```kotlin
// 36
.setHeader("id", "title", "completed", "created_at")

// 54
printer.printRecord("id", "title", "completed", "created_at")

// 75-76
completed = record[2].toBoolean(),
createdAt = LocalDateTime.parse(record[3], DateTimeFormatter.ISO_LOCAL_DATE_TIME),

// 121-128
CSVPrinter(writer, CSV_FORMAT).use { printer ->
    printer.printRecord(
        task.id,
        task.title,
        task.completed,
        task.createdAt.format(DateTimeFormatter.ISO_LOCAL_DATE_TIME),
    )
}

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

**After**:

[TaskRepository.kt (12-15; 28-37; 46-47; 75)](../src/main/kotlin/data/TaskRepository.kt):

```kotlin
// 12-15
data class Task(
    val id: Int,
    var title: String,
    var details: String,
)

// 28-37
init {
    file.parentFile?.mkdirs()
    if (!file.exists()) {
        file.writeText("id,title,details\n")
    } else {
        file.readLines().drop(1).forEach { line ->
            val parts = line.split(",", limit = 3)
            if (parts.size == 3) {
                val id = parts[0].toIntOrNull() ?: return@forEach
                tasks.add(Task(id, parts[1], parts[2]))
                idCounter.set(maxOf(idCounter.get(), id + 1))
            }
        }
    }
}

// 46-47
fun add(title: String, details: String = ""): Task {
    val task = Task(idCounter.getAndIncrement(), title, details)
    ...

// 75
file.writeText("id,title,details\n" + tasks.joinToString("\n") { "${it.id},${it.title},${it.details}" })
```

[Task.kt (19-24; 83; 101-107)](../src/main/kotlin/model/Task.kt):

```kotlin
// 19-24
data class Task(
    val id: String = UUID.randomUUID().toString(),
    val title: String,
    val details: String,
    val completed: Boolean = false,
    val createdAt: LocalDateTime = LocalDateTime.now(),
) {...}

// 83
val escapedDetails = details.replace("\"", "\"\"")
return "$id,\"$escapedTitle\",\"$escapedDetails\",$completed,${createdAt.format(formatter)}"

// 101-107
mapOf(
    "id" to id,
    "title" to title,
    "details" to details,
    "completed" to completed,
    "createdAt" to createdAt.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm")),
    "createdAtISO" to createdAt.format(DateTimeFormatter.ISO_LOCAL_DATE_TIME),
)
```

[TaskRoutes.kt (33-45; 82-91; 123; 293-294; 338; 357)](../src/main/kotlin/routes/TaskRoutes.kt):

```kotlin
// 33-45
fun Routing.configureTaskRoutes(store: TaskStore = TaskStore()) {
    get("/tasks") { call.handleTaskList(store) }
    get("/") { call.respondRedirect("/tasks") }
    get("/tasks/fragment") { call.handleTaskFragment(store) }
    post("/tasks") { call.handleCreateTask(store) }
    get("/tasks/{id}/edit") { call.handleEditTask(store) }
    post("/tasks/{id}/edit") { call.handleUpdateTask(store) }
    get("/tasks/{id}/view") { call.handleViewTask(store) }
    post("/tasks/{id}/toggle") { call.handleToggleTask(store) }
    delete("/tasks/{id}") { call.handleDeleteTask(store) }  // HTMX path (RESTful)
    post("/tasks/{id}/delete") { call.handleDeleteTask(store) }  // No-JS fallback
    get("/tasks/search") { call.handleSearchTasks(store) }
    get("/tasks/{id}/details") { call.handleViewDetails(store) }
}

// 82-91
timed("T3_add", jsMode()) {
    val params = receiveParameters()
    val title = params["title"]?.trim() ?: ""
    val details = params["details"]?.trim() ?: ""
    val query = params["q"].toQuery()

    when (val validation = Task.validate(title)) {
        is ValidationResult.Error -> handleCreateTaskError(store, title, details, query, validation)
        ValidationResult.Success -> handleCreateTaskSuccess(store, title, details, query)
    }
}

// 123
val task = Task(title = title, details=details)

// additional function
private suspend fun ApplicationCall.handleViewDetails(store: TaskStore) {
    val id = parameters["id"] ?: run {
        respond(HttpStatusCode.BadRequest)
        return
    }

    val task = store.getById(id)
    if (task == null) {
        respond(HttpStatusCode.NotFound)
        return
    }

    if (isHtmxRequest()) {
        val html = renderTemplate("tasks/_details.peb", mapOf("task" to task.toPebbleContext()))
        respondText(html, ContentType.Text.Html)
    } else {
        respondRedirect("/tasks")
    }
}

// 293-294
val ariaLive = if (isError) " aria-live=\"assertive\"" else " aria-live=\"polite\""
val cssClass = if (isError) " class=\"error\"" else ""

// 338
val params = receiveParameters()
val newTitle = params["title"]?.trim() ?: ""
val newDetails = params["details"]?.trim() ?: ""

// 357
val updated = task.copy(title = newTitle, details = newDetails)
```

[TaskStore.kt (36; 54; 75-76; 121-128; 209; 231)](../src/main/kotlin/storage/TaskStore.kt):

```kotlin
// 36
.setHeader("id", "title", "details", "completed", "created_at")

// 54
printer.printRecord("id", "title", "details", "completed", "created_at")

// 75-76
details = record[2],
completed = record[3].toBoolean(),
createdAt = LocalDateTime.parse(record[4], DateTimeFormatter.ISO_LOCAL_DATE_TIME),

// 121-128
CSVPrinter(writer, CSV_FORMAT).use { printer ->
    printer.printRecord(
        task.id,
        task.title,
        task.details,
        task.completed,
        task.createdAt.format(DateTimeFormatter.ISO_LOCAL_DATE_TIME),
    )
}

// 209
printer.printRecord("id", "title", "deatils", "completed", "created_at")

// 231
printer.printRecord("id", "title", "deatils", "completed", "created_at")
```

[custom.css](../src/main/resources/static/css/custom.css):

```css
/* ========================================
   View Details
   ======================================== */
input[readonly] {
  caret-color: transparent !important;
  cursor: default !important;
}
```

[\_details.peb](../src/main/resources/templates/tasks/_details.peb):

```html
<li id="task-{{ task.id }}" class="task-details">
  <form
    action="/tasks/{{ task.id }}/details"
    method="get"
    hx-post="/tasks/{{ task.id }}/details"
    hx-target="#task-{{ task.id }}"
    hx-swap="outerHTML"
  >
    <label for="title-{{ task.id }}">Title</label>
    <input
      type="text"
      id="title-{{ task.id }}"
      name="title"
      value="{{ task.title }}"
      readonly
      required
      autofocus
      aria-describedby="hint-{{ task.id }}"
    />

    <label for="details-{{ task.id }}">Details</label>
    <input
      type="text"
      id="details-{{ task.id }}"
      name="details"
      value="{{ task.details }}"
      readonly
      aria-describedby="hint-{{ task.id }}"
    />

    <a
      href="/tasks"
      hx-get="/tasks/{{ task.id }}/view"
      hx-target="#task-{{ task.id }}"
      hx-swap="outerHTML"
      role="button"
      >Close</a
    >
  </form>
</li>
```

[\_edit.peb](../src/main/resources/templates/tasks/_edit.peb):

```html
<label for="details-{{ task.id }}">Details</label>
<input
  type="text"
  id="details-{{ task.id }}"
  name="details"
  value="{{ task.details }}"
  aria-describedby="hint-{{ task.id }}"
/>
```

[\_item.peb](../src/main/resources/templates/tasks/_item.peb):

```html
<form
  action="/tasks/{{ task.id }}/details"
  method="get"
  style="display: inline"
  hx-get="/tasks/{{ task.id }}/details"
  hx-target="#task-{{ task.id }}"
  hx-swap="outerHTML"
>
  <button type="submit" aria-label="View details: {{ task.details }}">
    View Details
  </button>
</form>
```

[index.peb](../src/main/resources/templates/tasks/index.peb):

```html
    ...
    {% endif %}
        <label for="task-details">Details</label>
        <input
        type="text"
        id="task-details"
        name="details"
        placeholder="Optional"
        />
        <button type="submit">Add Task</button>
    </form>
</section>
```

**What changed**: Added an input under the title for extra details and a button to view them. Modified edit button to be able to change details aswell as title

**Why**: It is a very simple change that massively improves the functionality of the task manager, SR still works to explain details.

**Impact**: Improved functionality of the app with no loss of accessibility

---

## [5. Verification Results](#5-verification-results){.header} {#5-verification-results}

### [Part A: Regression Checklist (20 checks)](#part-a-regression-checklist-20-checks){.header}

**Instructions**: Test all 20 criteria. Mark pass/fail/n/a + add notes.

| Check            | Criterion                             | Level | Result | Notes                                                                                                       |
| ---------------- | ------------------------------------- | ----- | ------ | ----------------------------------------------------------------------------------------------------------- |
| **Keyboard (5)** |                                       |       |        |                                                                                                             |
| K1               | 2.1.1 All actions keyboard accessible | A     | Pass   | Navigated around entire page with tabs/tried inputs with enter only                                         |
| K2               | 2.4.7 Focus visible                   | AA    | Pass   | Witnessed from K1 testing                                                                                   |
| K3               | No keyboard traps                     | A     | Pass   | Can tab through all elements without issue                                                                  |
| K4               | Logical tab order                     | A     | Pass   | Tabs always travels along a row before going down the the next one                                          |
| K5               | Skip links present                    | AA    | Fail   | Skip link jumps to highlight the border of the form & requires a second to enter the first input box        |
| **Forms (3)**    |                                       |       |        |                                                                                                             |
| F1               | 3.3.2 Labels present                  | A     | Pass   | All inputs are described by aria in some way                                                                |
| F2               | 3.3.1 Errors identified               | A     | Pass   | Error messages all have role="alert"                                                                        |
| F3               | 4.1.2 Name/role/value                 | A     | Pass   | ALl form controls have appropriate simple names                                                             |
| **Dynamic (3)**  |                                       |       |        |                                                                                                             |
| D1               | 4.1.3 Status messages                 | AA    | Pass   | Status div has role=status                                                                                  |
| D2               | Live regions work                     | AA    | Pass   | Tested with NVDA, announces 'Task added/Approprate error message'                                           |
| D3               | Focus management                      | A     | Pass   | Once task added, if erroneous, clear to see                                                                 |
| **No-JS (3)**    |                                       |       |        |                                                                                                             |
| N1               | Full feature parity                   | ---   | Fail   | Most CRUD operations work without js - Update does not                                                      |
| N2               | POST-Redirect-GET                     | ---   | Pass   | Only one submission on no-JS                                                                                |
| N3               | Errors visible                        | A     | Fail   | Error summary is not shown in no-JS mode                                                                    |
| **Visual (3)**   |                                       |       |        |                                                                                                             |
| V1               | 1.4.3 Contrast minimum                | AA    | Pass   | Dark mode body text is 15:1, Dark mode button text is 4.6:1; light mode has not been modified               |
| V2               | 1.4.4 Resize text                     | AA    | Pass   | No content lost on zoom                                                                                     |
| V3               | 1.4.11 Non-text contrast              | AA    | Pass   | Focus indicator is 3:1                                                                                      |
| **Semantic (3)** |                                       |       |        |                                                                                                             |
| S1               | 1.3.1 Headings hierarchy              | A     | Pass   | h1 -> h2 -> p, small under appropriate inputs with no mixed ordering                                        |
| S2               | 2.4.1 Bypass blocks                   | A     | Pass   | Can always skip past optional navigation/theme links using skip to main content (works with and without js) |
| S3               | 1.1.1 Alt text                        | A     | Pass   | No images used in interface                                                                                 |

**Summary**: 17/20 pass, 3/20 fail **Critical failures** (if any): N3

---

### [Part B: Before/After Comparison](#part-b-beforeafter-comparison){.header}

**Instructions**: Compare Week 9 baseline (pre-fix) to Week 10 (post-fix). Show improvement.

Pre-fix: functionality in no-js was better, however despite meeting 1.4.3 (AA), it was found that only allowing a light mode prevented certain users with (especially those with photophobia) from comfortable use. This is a violation of 1.4.8 (AAA)

Post-fix: functionality in no-js has decreased however it was deemed that due to the tiny proportion of people (<1% of internet traffic) that use no-js this is not significant. By adding a dark theme, we have made the interface more supportive for persons that experience photophobia (light sensitivity) (5-20% of the general population) which is a symptom that can arise from migraines, dry eye syndrome, or traumatic brain injuries. This fix rectifies the 1.4.11 violation and make 1.4.3 include more people

---

**Re-pilot details**:

- **P3** (post-fix): keyboard preference, with js
  -- Consent script (above) read & consented to 11/12/2025

**Limitations / Honest reporting**:

> - Theme change is useful for use in sunlight
> - Likes the colour contrast in dark mode
> - Adding multiple tasks concurrently is easy
> - Being able to view task details without risking changing them is useful
> - Adding a description helps with completing more complicated tasks
> - Site works as expected

---

## [6. Evidence Folder Contents](#6-evidence-folder-contents){.header} {#6-evidence-folder-contents}

**Instructions**: List all files in your evidence/ folder. Provide context.

### [Screenshots](#screenshots){.header}

| Evidence                                    | Context                                                   | Finding Improvement                                     |
| ------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------- |
| [T1](./evidence/T1_evidence.png)            | P1 evidence screenshots for Task1                         | N/A                                                     |
| [T2](./evidence/T2_evidence.png)            | P1 evidence screenshots for Task2                         | N/A                                                     |
| [T3](./evidence/T3_evidence.png)            | P1 evidence screenshots for Task3                         | N/A                                                     |
| [T4](./evidence/T4_evidence.png)            | P1 evidence screenshots for Task4                         | N/A                                                     |
| [T5](./evidence/T5_evidence.png)            | P1 evidence screenshots for Task5                         | N/A                                                     |
| [T6](./evidence/T6_evidence.png)            | P1 evidence screenshots for Task6                         | N/A                                                     |
| [T7](./evidence/T7_evidence.png)            | P1 evidence screenshots for Task7                         | N/A                                                     |
| [P-dark](./evidence/P-dark.png)             | P3: the new dark theme with button changed to say "Light" | Improvement 2 - 1.4.3/1.4.11/1.4.8 improvement          |
| [P-light](./evidence/P-light.png)           | P3: the light theme with button saying "Dark"             | Improvement 2 - 1.4.3/1.4.11/1.4.8 improvement          |
| [P-details](./evidence/P-details.png)       | P3: shows the new view to see task details                | Shows the requested details view                        |
| [P-task_added](./evidence/P-task_added.png) | P3 colour contrast for the CRUD method complete popup     | Shows that WCAG 2.2 is not violated regardless of theme |

**PII check**:

- All screenshots cropped to show only relevant UI
- Browser bookmarks/tabs not visible
- Participant names/emails blurred or not visible

---

### [Pilot Notes](#pilot-notes){.header}

**Instructions**: Attach pilot notes as separate files (P1-notes.md, P2-notes.md, etc.). Summarize key observations here.

**P1** (Standard mouse + HTMX):

- [P1-notes.md](./evidence/P1-notes.md)
- **Key observation 1**: "No issues with functionality"
- **Key observation 2**: "Would like to be able to add more detail to each task"

**P2** (Keyboard only + js-off):

- [P2-notes.md](./evidence/P2-notes.md)
- **Key observation 1**: "Requires lots of tabbing to add multiple tasks consecutively"
- **Key observation 2**: "Disliked the light mode contrast"

---

## [Evidence Chain Example (Full Trace)](#evidence-chain-example-full-trace){.header}

**Instructions**: Pick ONE finding and show complete evidence trail from data → fix → verification.

**Finding selected**: Finding #3: No method implemented to swap colour schemes

**Evidence trail**:

1.  **Data**: N/A
2.  **Observation**: P1 pilot notes: "No way of changing theme in the webpage" & "After manually changing browser theme, there were no issues with readability in dark mode - preferred"
3.  **Screenshot**: T2_missing-btn.png shows there is no way to change the theme without manually changing browser preferences - this process is not intuitive and does not provide an accessible user experience for all individuals regardless of their comfort using technology.
4.  **WCAG**: 1.4.8
5.  **Prioritisation**: (findings-table.csv)[./evidence/findings-table.csv] row 3 - Priority score 5 (Impact 4 + Inclusion 3 - Effort 2)
6.  **Fix**: Fix 1: Updating page to include a mode switching button - outlined above
7.  **Verification**: P-light.png/P-dark.png - shows both of the new modes with a clearly outlined and labelled button that adheres to 1.4.3 contrast rule providing an easily accessible method to change between theme modes (fixes 1.4.8 violation), and does not violate 1.4.3/1.4.11
8.  **Before/after**: Foreground and background colours can now be changed easily by the user when there was no prior implementation to do this
9.  **Re-pilot**: P3 (keyboard + HTMX user) pilot notes - "Theme change is useful for use in sunlight"

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
