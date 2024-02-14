---
title: Character.FromNumber
---

# Character.FromNumber


Converte un numero in un carattere di testo.


## Syntax

```powerquery
Character.FromNumber(
    number as number
) as text
```


## Remarks

Restituisce il carattere equivalente al numero.<br />    <br />    Il <code>number</code> fornito deve essere un codice carattere Unicode a 21bit.


## Examples

### Example #1 
Converte un numero nel valore di carattere equivalente.
```powerquery
Character.FromNumber(9)
```

Result: 
```powerquery
"#(tab)"
```


### Example #2 
Converte un carattere in un numero e viceversa.
```powerquery
Character.FromNumber(Character.ToNumber("A"))
```

Result: 
```powerquery
"A"
```


### Example #3 
Converte il codice carattere esadecimale per l&#39;emoticon &#34;sogghigno&#34; nella relativa coppia di surrogati UTF-16 equivalente.
```powerquery
Character.FromNumber(0x1F600)
```

Result: 
```powerquery
"#(0001F600)"
```




## Category
Text.Conversions from and to text
