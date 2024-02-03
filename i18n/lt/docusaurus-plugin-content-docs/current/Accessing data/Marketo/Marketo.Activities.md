---
title: Marketo.Activities
---

# Marketo.Activities


## Description

Pateikiama lentelė su galimų klientų veikla.


## Syntax

```powerquery
Marketo.Activities(
    url as text,
    startTime as date,
    activityIds as list
) as table
```


## Details

Kreipiamasi į „Marketo“ REST API galinį punktą naudojant <code>url</code>/rest/v1/activities.json. Pateikiama visa sąraše <code>activityIds</code> nurodyta veikla nuo <code>startTime</code>.


## Examples

### Example #1 
Pateikiama lentelė su lankymosi tinklalapyje veikla nuo 2015 m. lapkričio 1 d.
```powerquery
Marketo.Activities("https://100-AAA-999.mktorest.com/rest", #date(2015,11,1), {1})
```

Result: 
```powerquery
Lentelė su išsamia visos lankymosi tinklalapyje veiklos informacija nuo lapkričio 1 d.
```



