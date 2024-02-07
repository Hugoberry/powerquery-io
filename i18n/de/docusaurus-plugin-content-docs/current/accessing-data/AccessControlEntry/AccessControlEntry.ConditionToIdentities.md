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

"<code>condition</code>" wird unter Verwendung der angegebenen "<code>identityProvider</code>" in die Liste der Identitäten konvertiert, für die "<code>condition</code>" in allen Autorisierungskontexten mit "<code>identityProvider</code>" als Identitätsanbieter <code>TRUE</code> zurückgeben würde. Es kommt zu einem Fehler, wenn es nicht möglich ist, "<code>condition</code>" in eine Liste mit Identitäten zu konvertieren, z. B. wenn "<code>condition</code>" andere Attribute als Benutzer- oder Gruppenidentitäten für die Entscheidungsfindung heranzieht.<br />    Beachten Sie, dass die Liste die Identitäten darstellt, wie sie in "<code>condition</code>" erscheinen, und dass keine Normalisierung (z. B. eine Gruppenerweiterung) durchgeführt wird.<br />



## Category
Accessing data
