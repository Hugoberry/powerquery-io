---
title: Text.AfterDelimiter
---

# Text.AfterDelimiter


Text.AfterDelimiter


## Syntax

```powerquery
Text.AfterDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Remarks

Atgriež ievades `text` daļu aiz norādītā elementa `delimiter`. Neobligāta skaitliska vērtība `index` norāda, kurš no elementiem `delimiter` ir jāņem vērā. Neobligāts saraksts `index` norāda, kurš no elementiem `delimiter` ir jāņem vērā, kā arī norāda, vai indeksēšana ir jāveic no ievades sākuma vai beigām.


## Examples

### Example #1
Iegūt ievades “111-222-333” daļu aiz (pirmās) defises.
```powerquery
Text.AfterDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"222-333"
```


### Example #2
Iegūt ievades “111-222-333” daļu aiz otrās defises.
```powerquery
Text.AfterDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"333"
```


### Example #3
Iegūt ievades “111-222-333” daļu aiz otrās defises no beigām.
```powerquery
Text.AfterDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"222-333"
```




## Category
Text.Transformations
