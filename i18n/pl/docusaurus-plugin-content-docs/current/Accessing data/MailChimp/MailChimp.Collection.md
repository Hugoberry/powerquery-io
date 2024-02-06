---
title: MailChimp.Collection
---

# MailChimp.Collection


Zwraca tabelę danych z punktu końcowego usługi MailChimp.


## Syntax

```powerquery
MailChimp.Collection(
    path as text,
    optional entityName as text
) as table
```


## Remarks

Wywołuje interfejs API usługi MailChimp i zwraca wynikowy zestaw danych jako tabelę. Automatycznie przechodzi między stronami w ramach wszystkich wyników. Opcjonalnego parametru entityName można używać dla punktów końcowych interfejsu API, w których główny punkt końcowy nie jest zgodny z główną wartością entityName w odpowiedzi JSON.


## Examples

### Example #1 
Pobiera tabelę danych z punktu końcowego „lists” interfejsu API usługi MailChimp.
```powerquery
MailChimp.Collection("lists")
```

Result: 
```powerquery
Tabela z danymi listy.
```


### Example #2 
Pobiera tabelę danych z punktu końcowego „campaign-folders” interfejsu API usługi MailChimp.
```powerquery
MailChimp.Collection("campaign-folders", "folders")
```

Result: 
```powerquery
Tabela z danymi folderów kampanii.
```



