---
title: Text.Combine
---

# Text.Combine


Concatenates a list of text values into one text value.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Remarks

Returns the result of combining the list of text values, `texts`, into a single text value. Any `null` values present in `texts` are ignored. An optional `separator` used in the final combined text can be specified.


## Examples

### Example #1
Combine text values "Seattle" and "WA".
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2
Combine text values "Seattle" and "WA", separated by a comma and a space.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3
Combine the values "Seattle", `null`, and "WA", separated by a comma and a space. (Note that the `null` is ignored.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #4
Combine the first name, middle initial (if present), and last name into the individual's full name.
```powerquery
let
    Source = Table.FromRecords({
        [First Name = "Doug", Middle Initial = "J", Last Name = "Elis"],
        [First Name = "Anna", Middle Initial = "M", Last Name = "Jorayew"],
        [First Name = "Rada", Middle Initial = null, Last Name = "Mihaylova"]
    }),
    FullName = Table.AddColumn(Source, "Full Name", each Text.Combine({[First Name], [Middle Initial], [Last Name]}, " "))
in
    FullName
```

Result: 
```powerquery
Table.FromRecords({
    [First Name = "Doug", Middle Initial = "J", Last Name = "Elis", Full Name = "Doug J Elis"],
    [First Name = "Anna", Middle Initial = "M", Last Name = "Jorayew", Full Name = "Anna M Jorayew"],
    [First Name = "Rada", Middle Initial = null, Last Name = "Mihaylova", Full Name = "Rada Mihaylova"]
})
```




## Category
Text.Transformations

import Partial_Text_Combine from './_text.combine.mdx'

<Partial_Text_Combine />
