---
title: Smartsheet.Tables
---

# Smartsheet.Tables


## Description

Vráti tabuľku s hárkami, zostavami, priečinkami a pracovnými priestormi z rozhrania Smartsheet API


## Syntax

```powerquery
Smartsheet.Tables(

) as table
```


## Details

Vráti vnorenú tabuľku s dostupnými hárkami, zostavami, priečinkami a pracovnými priestormi z rozhrania Smartsheet API.


## Examples

### Example #1 
Vráti hárky, priečinky, zostavy a pracovné priestory, ktoré sú k dispozícii na najvyššej úrovni hierarchie služby Smartsheet
```powerquery
Smartsheet.Tables()
```

Result: 
```powerquery
Tabuľka s priečinkami, zostavami a pracovnými priestormi z najvyššej úrovne hierarchie služby Smartsheet
```



