---
title: Text.BetweenDelimiters
---

# Text.BetweenDelimiters


## Description

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


## Details

Returnează porțiunea <code>text</code> dintre <code>startDelimiter</code> și <code>endDelimiter</code> specificate.    O valoare numerică opțională <code>startIndex</code> indică ce apariție a instanței <code>startDelimiter</code> trebuie luată în calcul.    O listă opțională <code>startIndex</code> indică ce apariție a instanței <code>startDelimiter</code> trebuie luată în calcul și dacă indexarea trebuie realizată de la începutul sau de la sfârșitul intrării.    <code>endIndex</code> este similar, cu excepția faptului că indexarea se face în raport cu <code>startIndex</code>.


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
