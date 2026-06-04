---
title: Text.BetweenDelimiters
---

# Text.BetweenDelimiters


Text.BetweenDelimiters


## Syntax

```powerquery
Text.BetweenDelimiters(
    text as text,
    startDelimiter as text,
    endDelimiter as text,
    optional startIndex as any,
    optional endIndex as any
) as any
```


## Remarks

Returnează porțiunea `text` dintre `startDelimiter` și `endDelimiter` specificate. O valoare numerică opțională `startIndex` indică ce apariție a instanței `startDelimiter` trebuie luată în calcul. O listă opțională `startIndex` indică ce apariție a instanței `startDelimiter` trebuie luată în calcul și dacă indexarea trebuie realizată de la începutul sau de la sfârșitul intrării. `endIndex` este similar, cu excepția faptului că indexarea se face în raport cu `startIndex`.


## Examples

### Example #1
Obțineți porțiunea din „111 (222) 333 (444)” dintre (prima) paranteză deschisă și (prima) paranteză închisă care o urmează.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")")
```

Result: 
```powerquery
"222"
```


### Example #2
Obțineți porțiunea din „111 (222) 333 (444)” dintre a doua paranteză deschisă și prima paranteză închisă care o urmează.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", 1, 0)
```

Result: 
```powerquery
"444"
```


### Example #3
Obțineți porțiunea din „111 (222) 333 (444)” dintre a doua paranteză deschisă de la sfârșit și a doua paranteză închisă care o urmează.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", {1, RelativePosition.FromEnd}, {1, RelativePosition.FromStart})
```

Result: 
```powerquery
"222) 333 (444"
```




## Category
Text.Transformations
