---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


Zwraca listę tożsamości akceptowanych przez warunek.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Remarks

Za pomocą podanego elementu `identityProvider` konwertuje element `condition` na listę tożsamości, dla których element `condition` zwróci wartość `true` we wszystkich kontekstach autoryzacji z dostawcą tożsamości `identityProvider`. Wystąpi błąd, jeśli nie będzie możliwe przekonwertowanie elementu `condition` na listę tożsamości, na przykład jeśli element `condition` podczas podejmowania decyzji sprawdza atrybuty inne niż tożsamości użytkownika lub grupy.

Należy pamiętać, że lista tożsamości reprezentuje tożsamości w sposób, w jaki pojawiają się one w obszarze `condition`, i względem nich nie jest przeprowadzana żadna normalizacja (na przykład rozszerzenie grupy)



## Category
Accessing data
