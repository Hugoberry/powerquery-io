---
title: Netezza.Database
---

# Netezza.Database


Importe dados de um banco de dados do IBM Netezza.


## Syntax

```powerquery
Netezza.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Retorna uma tabela de modos de exibição, funções armazenadas e tabelas do Netezza do banco de dados do Servidor do Netezza `database` no servidor `server`. A porta pode ser especificada opcionalmente com o servidor, separada por dois-pontos. Um parâmetro de gravação opcional, `options`, pode ser especificado para controlar as seguintes opções:

-   `CreateNavigationProperties`: um lógico (true/false) que define se é necessário gerar propriedades de navegação nos valores retornados (o padrão é true)
-   `HierarchicalNavigation`: um lógico (true/false) que define se é necessário exibir as tabelas agrupadas pelos nomes de esquema (o padrão é false)
-   `ConnectionTimeout`: uma duração que controla quanto tempo aguardar antes de abandonar uma tentativa de estabelecer uma conexão com o servidor. O valor padrão é dependente de driver.
-   `CommandTimeout`: uma duração que controla por quanto tempo a consulta do lado do servidor tem permissão para ser executada antes de ser cancelada. O valor padrão é dependente de driver.
-   `NormalizeDatabaseName`: um lógico (true/false) que define se o nome do banco de dados será normalizado para letras maiúsculas ou interpretado literalmente (o padrão é true).

O parâmetro de registro está especificado como \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
Liste as tabelas em um projeto do IBM Netezza.
```powerquery
Netezza.Database("netezza:5480", "netezza_database")
```



