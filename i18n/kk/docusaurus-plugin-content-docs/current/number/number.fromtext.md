---
title: Number.FromText
---

# Number.FromText


("15", "3,423.10", "5.0E-10") жалпы мәтіндік пішімдерінен сандарды жасайды.


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Remarks

Берілген `text` мәтіндік мәнінен `number` мәнін қайтарады.

-   `text`: сандық мәннің мәтіндік көрінісі. Көрініс сандық пішімде болуы керек, мысалы, "15", "3423,10", "5,0E-10".
-   `culture`: `text` қалай түсіндірілетінін басқаратын қосымша мәдениет (мысалы, "en-US").


## Examples

### Example #1
`"4"` сандық мәнін алу.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2
`"5.0e-10"` сандық мәнін алу.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
