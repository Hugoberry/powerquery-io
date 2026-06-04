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

Returnează porțiunea din `text` de după `delimiter` specificat. O valoare numerică opțională `index` indică ce apariție a instanței `delimiter` trebuie luată în calcul. O listă opțională `index` indică ce apariție a instanței `delimiter` trebuie luată în calcul și dacă indexarea trebuie realizată de la începutul sau de la sfârșitul intrării.


## Examples

### Example #1
Obțineți porțiunea din „111-222-333” de după (prima) cratimă.
```powerquery
Text.AfterDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"222-333"
```


### Example #2
Obțineți porțiunea din „111-222-333” de după a doua cratimă.
```powerquery
Text.AfterDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"333"
```


### Example #3
Obțineți porțiunea din „111-222-333” de după a doua cratimă de la sfârșit.
```powerquery
Text.AfterDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"222-333"
```




## Category
Text.Transformations
