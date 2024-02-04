---
title: DateTimeZone.FixedLocalNow
---

# DateTimeZone.FixedLocalNow


## Description

Devolve a data e hora atuais no fuso horário local. Este valor é fixo e não mudará com as chamadas sucessivas.


## Syntax

```powerquery
DateTimeZone.FixedLocalNow(

) as datetimezone
```


## Details

Devolve um valor <code>datetime</code> definido para a data e hora atuais no sistema. O valor devolvido contém informações de fuso horário que representam o fuso horário local. Este valor é fixo e não mudará com as chamadas sucessivas, ao contrário de DateTimeZone.LocalNow, que poderá devolver valores diferentes no decorrer da execução de uma expressão.



## Category
DateTimeZone
