---
title: MailChimp.Collection
---

# MailChimp.Collection


Gibt eine Tabelle mit Daten von einem MailChimp-Endpunkt zurück.


## Syntax

```powerquery
MailChimp.Collection(
    path as text,
    optional entityName as text
) as table
```


## Remarks

Sendet einen Aufruf an die MailChimp-API und gibt das Ergebnisdataset als Tabelle zurück. Es werden automatisch alle Ergebnisse durchlaufen. Der optionale entityName-Parameter kann für API-Endpunkte verwendet werden, bei denen der Stammendpunkt und der Haupt-entityName in der JSON-Antwort nicht übereinstimmen.


## Examples

### Example #1 
Ruft eine Tabelle mit Daten vom Endpunkt &#34;lists&#34; der MailChimp-API ab.
```powerquery
MailChimp.Collection("lists")
```

Result: 
```powerquery
Eine Tabelle mit lists-Daten.
```


### Example #2 
Ruft eine Tabelle mit Daten vom Endpunkt &#34;campaign-folders&#34; der MailChimp-API ab.
```powerquery
MailChimp.Collection("campaign-folders", "folders")
```

Result: 
```powerquery
Eine Tabelle mit campaign-folders-Daten.
```



