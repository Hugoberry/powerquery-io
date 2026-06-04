---
title: Text.Split
---

# Text.Split


Көрсетілген бөлгіштің негізінде мәтінді мәтіндік мәндер тізіміне бөледі.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Remarks

Көрсетілген бөлгіш негізінде мәтіндік мәнін бөлу нәтижесінде алынған мәтіндік мәндердің тізімін қайтарады.

-   `text`: Бөлу үшін мәтіндік мән.
-   `separator`: Мәтінді бөлу үшін пайдаланылатын бөлгішті көрсетіңіз. Бөлгіш бір таңба немесе таңбалар тізбегі болуы мүмкін. Егер таңбалар тізбегі пайдаланылса, мәтін дәл реттілік орын алатын жерлерде ғана бөлінеді.


## Examples

### Example #1
"|" таңбасымен бөлінген "Name|Address|PhoneNumber" мәтіндік мәнінен тізімді жасау.
```powerquery
Text.Split("Name|Address|PhoneNumber", "|")
```

Result: 
```powerquery
{
    "Name",
    "Address",
    "PhoneNumber"
}
```


### Example #2
Таңбалар тізбегін пайдаланып мәтіндік мәнге негізделген тізім жасаңыз.
```powerquery
Text.Split("Name, the Customer, the Purchase Date", ", the ")
```

Result: 
```powerquery
{
    "Name",
    "Customer",
    "Purchase Date"
}
```




## Category
Text.Transformations
