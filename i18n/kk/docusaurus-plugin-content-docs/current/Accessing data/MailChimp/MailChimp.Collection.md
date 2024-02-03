---
title: MailChimp.Collection
---

# MailChimp.Collection


## Description

MailChimp соңғы нүктесінен деректері бар кестені қайтарады.


## Syntax

```powerquery
MailChimp.Collection(
    path as text,
    optional entityName as text
) as table
```


## Details

MailChimp API қызметін шақырады және алынған деректер жиынтығын кесте түрінде қайтарады. Барлық нәтижелерді бет бойынша автоматты түрде қарап шығады. Түбірлік соңғы нүкте мен JSON жауабындағы негізгі entityName сәйкес келмесе, API соңғы нүктелері үшін қосымша entityName параметрі пайдаланылуы мүмкін.


## Examples

### Example #1 
MailChimp API тізімдерінің соңғы нүктесінен деректер кестесін алады.
```powerquery
MailChimp.Collection("тізімдер")
```

Result: 
```powerquery
Тізімдердің деректері бар кесте.
```


### Example #2 
MailChimp API науқан-қалталар соңғы нүктесінен деректер кестесін алады.
```powerquery
MailChimp.Collection("науқан-қалталар", "қалталар")
```

Result: 
```powerquery
Науқан-қалталар деректері бар кесте.
```



