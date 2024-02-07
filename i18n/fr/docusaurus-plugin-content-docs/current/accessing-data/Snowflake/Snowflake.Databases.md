---
title: Snowflake.Databases
---

# Snowflake.Databases


Importez des données à partir de l&#39;entrepôt Snowflake Computing.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Remarks

Retourne une table listant les tables de l'<code>entrepôt</code> Snowflake Computing situé sur le <code>serveur</code>. Vous pouvez spécifier un paramètre d'enregistrement facultatif, <code>options</code>, pour contrôler les options suivantes :<ul><li><code>Role</code> : valeur texte à utiliser comme nom de rôle pour la connexion.</li><li><code>CreateNavigationProperties</code> : valeur logique (true/false) qui définit s'il faut générer des propriétés de navigation sur les valeurs retournées (la valeur par défaut est true).</li><li><code>ConnectionTimeout</code> : nombre de secondes pendant lesquelles attendre des réponses réseau de Snowflake.</li><li><code>CommandTimeout</code> : nombre de secondes pendant lesquelles attendre l'exécution de la requête.</li></ul>    


## Examples

### Example #1 
Répertoriez les tables d&#39;un entrepôt Snowflake.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



