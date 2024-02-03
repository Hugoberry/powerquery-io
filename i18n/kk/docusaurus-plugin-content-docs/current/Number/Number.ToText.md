---
title: Number.ToText
---

# Number.ToText


## Description

Берілген санды мәтінге түрлендіріңіз.


## Syntax

```powerquery
Number.ToText(
    number as number,
    optional format as text,
    optional culture as text
) as text
```


## Details

<code>format</code> арқылы көрсетілген пішімге сәйкес <code>number</code> сандық мәнін мәтіндік мәнге түрлендіреді.<br />    <br />    Пішім – санның қалай түрлендірілуі керектігін көрсететін мәтіндік мән. Қолдауға ие мәндер туралы толығырақ мәлімет үшін https://go.microsoft.com/fwlink/?linkid=2241210 және https://go.microsoft.com/fwlink/?linkid=2240884 бетіне өтіңіз.<br />    <br />    <code>format</code> мәдениетке тәуелді әрекетін басқару үшін қосымша <code>culture</code> (мысалы, "en-US") берілуі мүмкін.


## Examples

### Example #1 
Пішімді көрсетпей санды мәтінге түрлендіріңіз.
```powerquery
Number.ToText(4)
```

Result: 
```powerquery
"4"
```


### Example #2 
Санды экспоненциалды пішімге түрлендіріңіз.
```powerquery
Number.ToText(4, "e")
```

Result: 
```powerquery
"4.000000e+000"
```


### Example #3 
Санды тек бір ондық белгімен пайыздық пішімге түрлендіріңіз.
```powerquery
Number.ToText(-0.1234, "P1")
```

Result: 
```powerquery
"-12.3 %"
```




## Category
Number.Conversion and formatting
