---
title: Text.BeforeDelimiter
---

# Text.BeforeDelimiter


## Description

Text.BeforeDelimiter


## Syntax

```powerquery
Text.BeforeDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Details

Atgriež ievades <code>text</code> daļu pirms norādītā elementa <code>delimiter</code>.    Neobligāta skaitliska vērtība <code>index</code> norāda, kurš no elementiem <code>delimiter</code> ir jāņem vērā.    Neobligāts saraksts <code>index</code> norāda, kurš no elementiem <code>delimiter</code> ir jāņem vērā, kā arī norāda, vai indeksēšana ir jāveic no ievades sākuma vai beigām.


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
