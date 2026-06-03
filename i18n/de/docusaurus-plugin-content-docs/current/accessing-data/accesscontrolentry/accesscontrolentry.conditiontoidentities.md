---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


Gibt eine Liste der Identitäten zurück, die die Bedingung akzeptiert.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Remarks

"`condition`" wird unter Verwendung der angegebenen "`identityProvider`" in die Liste der Identitäten konvertiert, für die "`condition`" in allen Autorisierungskontexten mit "`identityProvider`" als Identitätsanbieter `TRUE` zurückgeben würde. Es kommt zu einem Fehler, wenn es nicht möglich ist, "`condition`" in eine Liste mit Identitäten zu konvertieren, z. B. wenn "`condition`" andere Attribute als Benutzer- oder Gruppenidentitäten für die Entscheidungsfindung heranzieht.

Beachten Sie, dass die Liste die Identitäten darstellt, wie sie in "`condition`" erscheinen, und dass keine Normalisierung (z. B. eine Gruppenerweiterung) durchgeführt wird.



## Category
Accessing data
