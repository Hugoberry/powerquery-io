---
title: DateTimeZone.FixedLocalNow
---

# DateTimeZone.FixedLocalNow


## Description

Retorna a data e a hora atuais no fuso horário local. Esse valor é fixo e não será alterado com as chamadas sucessivas.


## Syntax

```powerquery
DateTimeZone.FixedLocalNow(

) as datetimezone
```


## Details

Retorna um valor <code>datetime</code> definido como a data e a hora atuais no sistema. O valor retornado contém informações de fuso horário que representam o fuso horário local. Esse valor é fixo e não será alterado com as chamadas sucessivas, diferentemente de DateTimeZone.LocalNow, que poderá retornar valores diferentes no decorrer da execução de uma expressão.



## Category
DateTimeZone
