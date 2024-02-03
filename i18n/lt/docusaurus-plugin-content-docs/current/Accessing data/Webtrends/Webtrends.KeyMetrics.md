---
title: Webtrends.KeyMetrics
---

# Webtrends.KeyMetrics


## Description

Pateikiama pagrindinių „Webtrends“ metrikų lentelė.


## Syntax

```powerquery
Webtrends.KeyMetrics(
    ProfileId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Details

Iškviečia „Webtrends“ pagrindinių metrikų galinį punktą ir pateikia visus duomenis kaip lentelę.


## Examples

### Example #1 
Pateikiama pagrindinių nuomotojo 98765 metrikų per pastarąsias 30 dienų lentelė
```powerquery
Webtrends.KeyMetrics("98765")
```

Result: 
```powerquery
Pagrindinių metrikų lentelė
```



