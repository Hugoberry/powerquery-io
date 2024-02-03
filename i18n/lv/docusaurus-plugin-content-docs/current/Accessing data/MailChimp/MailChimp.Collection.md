---
title: MailChimp.Collection
---

# MailChimp.Collection


## Description

Atgriež tabulu ar datiem no MailChimp galapunkta.


## Syntax

```powerquery
MailChimp.Collection(
    path as text,
    optional entityName as text
) as table
```


## Details

Izsauc MailChimp API un atgriež iegūto datu kopu tabulas veidā. Automātiski pārlapo visus rezultātus. Ja JSON atbildē saknes galapunkts un galvenais parametrs entityName nav atbilstoši, API galapunktiem var izmantot neobligātu parametru entityName.


## Examples

### Example #1 
Atgādā tabulu ar datiem no MailChimp API sarakstu galapunkta.
```powerquery
MailChimp.Collection("saraksti")
```

Result: 
```powerquery
Tabula ar sarakstu datiem.
```


### Example #2 
Izvelk tabulu ar datiem no MailChimp API kampaņas-mapju galapunkta.
```powerquery
MailChimp.Collection("kampaņa-mapes", "mapes")
```

Result: 
```powerquery
Tabula ar kampaņas-mapju datiem.
```



