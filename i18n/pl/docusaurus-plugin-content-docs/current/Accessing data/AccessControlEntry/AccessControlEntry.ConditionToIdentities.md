---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


## Description

Zwraca listę tożsamości akceptowanych przez warunek.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Details

Za pomocą podanego elementu <code>identityProvider</code> konwertuje element <code>condition</code> na listę tożsamości, dla których element <code>condition</code> zwróci wartość <code>true</code> we wszystkich kontekstach autoryzacji z dostawcą tożsamości <code>identityProvider</code>. Wystąpi błąd, jeśli nie będzie możliwe przekonwertowanie elementu <code>condition</code> na listę tożsamości, na przykład jeśli element <code>condition</code> podczas podejmowania decyzji sprawdza atrybuty inne niż tożsamości użytkownika lub grupy.<br />    Należy pamiętać, że lista tożsamości reprezentuje tożsamości w sposób, w jaki pojawiają się one w obszarze <code>condition</code>, i względem nich nie jest przeprowadzana żadna normalizacja (na przykład rozszerzenie grupy)<br />



## Category
Accessing data
