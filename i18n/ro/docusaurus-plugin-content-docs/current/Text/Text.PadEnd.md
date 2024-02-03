---
title: Text.PadEnd
---

# Text.PadEnd


## Description

Returnează textul de o lungime specificată completând sfârşitul textului dat.


## Syntax

```powerquery
Text.PadEnd(
    text as text,
    count as number,
    optional character as text
) as text
```


## Details

Returnează o valoare <code>text</code> completată la lungimea <code>count</code> prin inserarea de spații la sfârșitul valorii text <code>text</code>.    Poate fi utilizat un caracter opțional <code>character</code> pentru a specifica caracterul utilizat pentru completare. Caracterul implicit pentru completare este un spațiu.


## Examples

### Example #1 
Completaţi sfârşitul unei valori text, astfel încât aceasta să aibă 10 caractere.
```powerquery
Text.PadEnd("Name", 10)
```

Result: 
```powerquery
"Name      "
```


### Example #2 
Completaţi sfârşitul unei valori text cu „|”, astfel încât aceasta să aibă 10 caractere.
```powerquery
Text.PadEnd("Name", 10, "|")
```

Result: 
```powerquery
"Name||||||"
```




## Category
Text.Transformations
