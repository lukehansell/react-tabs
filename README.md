# tabs

#breakableToys #tabs #react #react #storybook #jest

React tabs implementation

## Usage

```
+-TabContainer---+
| +-Tab--------+ |
| | content    | |
| +------------+ |
| +-Tab--------+ |
| | content    | |
| +------------+ |
+----------------+
```

### Components

#### TabContainer

Accepts Tabs as children and manages the state of which tab is open

#### Tab

##### props

- isActive - boolean -
  whether the tab is the currently selected or not.
- title - string - the text for the tab header

### Rules & Behavior

- Only one tab can be displayed at a time
- If only one tab is provided
  - then it is always displayed
- If multiple tabs are provided
  - If none are set as isActive
    - the first tab is displayed by default
  - If a tab is set as isActive
    - the active tab is displayed
  - If multiple tabs are set as isActive
    - only the first isActive tab is displayed
- When a tab is clicked on
  - then content for the selected tab is displayed
  - all other tabs are not displayed
