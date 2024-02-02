---
title: DateTimeZone.From
---

# DateTimeZone.From


## Description

Crée un datetimezone à partir de la valeur spécifiée.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Details

Retourne une valeur <code>datetimezone</code> du <code>value</code> spécifié. Vous pouvez également fournir un <code>culture</code> facultatif (par exemple, "fr-fr").Si le <code>value</code> spécifié est <code>null</code>, <code>DateTimeZone.From</code> retourne <code>null</code>. Si le <code>value</code> spécifié est <code>datetimezone</code>, <code>value</code> est retourné. Les valeurs des types suivants peuvent être converties en valeur <code>datetimezone</code> :      <ul>        <li><code>text</code> : valeur <code>datetimezone</code> depuis la représentation de texte. Référez-vous à <code>DateTimeZone.FromText</code> pour plus de détails.</li>        <li><code>date</code> : <code>datetimezone</code> avec <code>value</code> comme composant de date, <code>12:00:00 AM</code> comme composant d'heure et le décalage correspondant au fuseau horaire local.</li>        <li><code>datetime</code> : <code>datetimezone</code> avec <code>value</code> comme datetime et le décalage correspondant au fuseau horaire local.</li>        <li><code>time</code> : <code>datetimezone</code> avec la date équivalente à la date OLE Automation de <code>0</code> comme composant de date, <code>value</code>comme composant d'heure et le décalage correspondant au fuseau horaire local.</li>        <li><code>number</code> : <code>datetimezone</code> avec le datetime équivalent à la date OLE Automation exprimée par <code>value</code> et le décalage correspondant au fuseau horaire local.</li>      </ul>Si <code>value</code> est d'un autre type, une erreur est retournée.


## Examples

### Example #1 
Convertit &lt;code&gt;&#34;2020-10-30T01:30:00-08:00&#34;&lt;/code&gt; en une valeur &lt;code&gt;datetimezone&lt;/code&gt;.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```




## Category
DateTimeZone
