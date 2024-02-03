---
title: MailChimp.Collection
---

# MailChimp.Collection


## Description

Returnează un tabel cu date de la un punct final MailChimp.


## Syntax

```powerquery
MailChimp.Collection(
    path as text,
    optional entityName as text
) as table
```


## Details

Face un apel la API-ul MailChimp și returnează setul de date rezultat sub formă de tabel. Paginează automat toate rezultatele. Parametrul opțional entityName poate fi utilizat pentru punctele finale API unde punctul final rădăcină și entityName principal din răspunsul JSON nu se potrivesc.


## Examples

### Example #1 
Extrage un tabel de date din punctul final pentru liste al API-ului MailChimp.
```powerquery
MailChimp.Collection("lists")
```

Result: 
```powerquery
Un tabel cu date de liste.
```


### Example #2 
Extrage un tabel de date de la punctul final cu folderele de campanie de la API-ul MailChimp.
```powerquery
MailChimp.Collection("campaign-folders", "folders")
```

Result: 
```powerquery
Un tabel cu date de foldere de campanie.
```



