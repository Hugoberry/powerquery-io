---
title: Text.Range
---

# Text.Range


## Description

Returnează un subşir găsit la decalaj.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Details

Returnează un subșir din textul <code>text</code> găsit la decalajul <code>offset</code>.    Un parametru opțional, <code>count</code>, poate fi inclus pentru a specifica numărul de caractere de returnat. Generează o eroare dacă nu sunt caractere suficiente.


## Examples

### Example #1 
Găsiţi subşirul din textul „Hello World” care începe la indexul 6.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2 
Găsiţi subşirul din textul „Hello World Hello” care începe la indexul 6 şi care are lungimea de 5 caractere.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
