-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 30, 2020 at 01:43 PM
-- Server version: 8.0.12
-- PHP Version: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `resful`
--

-- --------------------------------------------------------

--
-- Table structure for table `alat`
--

CREATE TABLE `alat` (
  `id_alt` int(11) NOT NULL,
  `waktu` datetime NOT NULL,
  `statsiun` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `alat` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `merek` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `tahun` varchar(10) COLLATE utf8mb4_general_ci NOT NULL,
  `kondisi` varchar(50) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `alat`
--

INSERT INTO `alat` (`id_alt`, `waktu`, `statsiun`, `alat`, `merek`, `tahun`, `kondisi`) VALUES
(1, '2020-09-27 13:31:04', 'Statsiun A', 'Rad', 'EEC', '2008', ''),
(2, '2020-09-27 13:31:04', 'Statsiun A', 'AW', 'Coastal', '2009', ''),
(3, '2020-09-27 13:31:04', 'Statsiun A', 'Digi', 'MIMI', '2017', ''),
(4, '2020-09-27 13:31:04', 'Statsiun B', 'AW', 'AWI', '2011', ''),
(5, '2020-09-27 13:31:04', 'Statsiun B', 'Digi', 'Arkan', '2015', ''),
(6, '2020-09-25 13:31:04', 'Statsiun B', 'Rad', 'Selex', '2019', ''),
(7, '2020-09-26 22:41:04', 'Statsiun AB', 'AWnew', 'Coastalnew', '2011', 'ON'),
(9, '2020-09-27 23:09:21', 'Statsiun ZE', 'AWnew', 'Coastalnew', '2011', ''),
(10, '2020-09-29 10:18:36', 'Statsiun Baru', 'AWnew', 'Coastalnew', '2011', 'ON'),
(11, '2020-09-30 20:24:36', 'Statsiun A', 'Rad2', 'EEC2', '2020', 'OFF');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `password` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `statsiun` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `statsiun`) VALUES
(1, 'admin', '$2b$10$GIAQGIltuHCN5JTcklzBSOD7zMFy0XQGDaOWNgk.kuTBi0LBLU3Ke', 'Statsiun B'),
(2, 'superadmin', '$2b$10$IYfu03rOH8uvVuonBiHnC.lKZek6mP8WC7LgJ0q/KUss4Fa/xWZny', 'Statsiun A');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alat`
--
ALTER TABLE `alat`
  ADD PRIMARY KEY (`id_alt`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `alat`
--
ALTER TABLE `alat`
  MODIFY `id_alt` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
