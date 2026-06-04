---
title: Text.SplitAny
---

# Text.SplitAny


Бөлгіштегі таңбалардың кез келгенінде бөлінген мәтіндік мәндер тізімін қайтарады.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Remarks

Бөлгіште көрсетілген кез келген таңбаға негізделген мәтін мәнін бөлу нәтижесінде алынған мәтін мәндерінің тізімін қайтарады.

-   `text`: Бөлу үшін мәтіндік мән.
-   `separators`: Мәтінді бөлу үшін қолданылатын бөлгіш таңбалар.


## Examples

### Example #1
Көрсетілген бөлгіш таңбаларды пайдаланып, берілген мәтін негізінде тізім жасаңыз.
```powerquery
Text.SplitAny("Name|Customer ID|Purchase|Month-Day-Year", "|-")
```

Result: 
```powerquery
{
    "Name",
    "Customer ID",
    "Purchase",
    "Month",
    "Day",
    "Year"
}
```




## Category
Text.Transformations
