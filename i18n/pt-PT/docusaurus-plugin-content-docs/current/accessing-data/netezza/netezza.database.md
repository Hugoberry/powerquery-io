---
title: Netezza.Database
---

# Netezza.Database


Importar dados de uma base de dados do IBM Netezza.


## Syntax

```powerquery
Netezza.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Devolve uma tabela de tabelas, vistas e funções armazenadas de Netezza a partir da base de dados do Netezza Server `database` no servidor `server`. A porta pode ser especificada opcionalmente com o servidor, separada por uma vírgula. Pode ser especificado um parâmetro de registo opcional, `options`, para controlar as seguintes opções:

-   `CreateNavigationProperties`: um valor lógico (verdadeiro/falso) que define se são geradas propriedades de navegação nos valores devolvidos (a predefinição é verdadeiro)
-   `HierarchicalNavigation`: um valor lógico (verdadeiro/falso) que define se as tabelas agrupadas pelos seus nomes de esquema são visualizadas (a predefinição é falso)
-   `ConnectionTimeout`: uma duração que controla o tempo de espera antes de abandonar uma tentativa de ligação ao servidor. O valor predefinido depende do controlador.
-   `CommandTimeout`: uma duração que controla durante quanto tempo a consulta do lado do servidor tem permissão para ser executado até ser cancelada. O valor predefinido depende do controlador.
-   `NormalizeDatabaseName`: uma lógica (verdadeiro/falso) que define se o nome da base de dados deve ser normalizado para maiúsculas ou interpretado literalmente (a predefinição é verdadeiro).

O parâmetro de registo é especificado como \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
Listar as tabelas num projeto do IBM Netezza.
```powerquery
Netezza.Database("netezza:5480", "netezza_database")
```



