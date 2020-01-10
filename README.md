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

Tab element to be nested inside a tab container

##### props

- title - string - the text for the tab header
- isActive - boolean - is this the active tab?

#### TabHeader

Automatically created by the TabContainer for each Tab element given

#### props

- onClick - function - handler for when the element is clicked

### Rules & Behavior

- Only one tab can be displayed at a time
- If only one tab is provided
  - then it is always displayed
- If multiple tabs are provided
  - the first tab is displayed by default
- When a tab is clicked on
  - then content for the selected tab is displayed
  - all other tabs are not displayed
