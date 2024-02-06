---
title: Marketo.Activities
---

# Marketo.Activities


Zwraca tabelę zawierającą działania związane z potencjalnymi klientami.


## Syntax

```powerquery
Marketo.Activities(
    url as text,
    startTime as date,
    activityIds as list
) as table
```


## Remarks

Nawiązuje połączenie z punktem końcowym interfejsu API REST usługi Marketo pod adresem <code>url</code>/rest/v1/activities.json. Zwracane są wszystkie działania z listy <code>activityIds</code>, które miały miejsce od <code>startTime</code>.


## Examples

### Example #1 
Tworzy tabelę działań typu „Odwiedź stronę sieci Web” od 1 listopada 2015
```powerquery
Marketo.Activities("https://100-AAA-999.mktorest.com/rest", #date(2015,11,1), {1})
```

Result: 
```powerquery
Tabela zawierająca szczegóły wszystkich działań typu „Odwiedź stronę sieci Web” od 1 listopada
```



