---
title: Text.BeforeDelimiter
---

# Text.BeforeDelimiter


Text.BeforeDelimiter


## Syntax

```powerquery
Text.BeforeDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Remarks

Atgriež ievades `text` daļu pirms norādītā elementa `delimiter`. Neobligāta skaitliska vērtība `index` norāda, kurš no elementiem `delimiter` ir jāņem vērā. Neobligāts saraksts `index` norāda, kurš no elementiem `delimiter` ir jāņem vērā, kā arī norāda, vai indeksēšana ir jāveic no ievades sākuma vai beigām.


## Examples

### Example #1
Iegūt ievades “111-222-333” daļu pirms (pirmās) defises.
```powerquery
Text.BeforeDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"111"
```


### Example #2
Iegūt ievades “111-222-333” daļu pirms otrās defises.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"111-222"
```


### Example #3
Iegūt ievades “111-222-333” daļu pirms otrās defises no beigām.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"111"
```




## Category
Text.Transformations
