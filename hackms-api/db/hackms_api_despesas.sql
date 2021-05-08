-- MySQL dump 10.13  Distrib 8.0.16, for macos10.14 (x86_64)
--
-- Host: localhost    Database: hackms_api
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `despesas`
--

DROP TABLE IF EXISTS `despesas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `despesas` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `data_inicio` datetime NOT NULL,
  `data_termino` datetime NOT NULL,
  `exercicio` int(11) NOT NULL,
  `total_liquidado` decimal(15,2) NOT NULL,
  `total_empenhado` decimal(15,2) NOT NULL,
  `total_pago` decimal(15,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `despesas`
--

LOCK TABLES `despesas` WRITE;
/*!40000 ALTER TABLE `despesas` DISABLE KEYS */;
INSERT INTO `despesas` VALUES (1,'2019-01-01 00:00:00','2019-01-31 00:00:00',2019,1227345875.67,1464852875.15,848744070.25,'2019-08-03 23:19:13','2019-08-03 23:19:13'),(2,'2019-02-01 00:00:00','2019-02-28 00:00:00',2019,1024150132.63,1162057893.83,1221046276.82,'2019-08-03 23:21:13','2019-08-03 23:21:13'),(3,'2019-03-01 00:00:00','2019-03-31 00:00:00',2019,1023426273.83,1151381677.39,703194153.54,'2019-08-03 23:23:22','2019-08-03 23:23:22'),(4,'2019-04-01 00:00:00','2019-04-30 00:00:00',2019,987786018.12,1043999879.45,964470963.74,'2019-08-03 23:23:51','2019-08-03 23:23:51'),(5,'2019-05-01 00:00:00','2019-05-31 00:00:00',2019,1041405355.66,1114445561.51,947080615.46,'2019-08-03 23:23:58','2019-08-03 23:23:58'),(6,'2019-06-01 00:00:00','2019-06-30 00:00:00',2019,967270949.63,1004180408.88,959509880.18,'2019-08-03 23:24:05','2019-08-03 23:24:05');
/*!40000 ALTER TABLE `despesas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-08-04 11:35:57