export interface DocNavItem {
  title: string;
  href: string;
}

export interface DocNavSection {
  title: string;
  items: DocNavItem[];
}

export interface DocNavLang {
  sections: DocNavSection[];
}

export const docNav: Record<string, DocNavLang> = {
  en: {
    sections: [
      {
        title: "Getting Started",
        items: [
          { title: "Documentation Home", href: "/docs" },
          { title: "Getting Started", href: "/docs/getting-started" },
          { title: "Installation", href: "/docs/installation" },
          { title: "Architecture Overview", href: "/docs/architecture" },
          { title: "Configuration", href: "/docs/configuration" },
        ],
      },
      {
        title: "Guides",
        items: [
          { title: "Guide Overview", href: "/docs/guide" },
          { title: "CLI Commands", href: "/docs/cli" },
          { title: "Module Development", href: "/docs/modules" },
          { title: "Report Generation", href: "/docs/reporting" },
        ],
      },
      {
        title: "Tools",
        items: [
          { title: "Port Scanner", href: "/docs/port-scan" },
          { title: "Directory Finder", href: "/docs/dir-finder" },
          { title: "Header Audit", href: "/docs/header-audit" },
          { title: "Technology Detection", href: "/docs/tech-detection" },
          { title: "Web Fuzzer", href: "/docs/web-fuzzer" },
          { title: "JS Analysis", href: "/docs/js-analysis" },
          { title: "Parameter Discovery", href: "/docs/params" },
          { title: "403 Bypass", href: "/docs/403bypass" },
          { title: "Subdomain Enumeration", href: "/docs/subdomain" },
          { title: "Network Scanner", href: "/docs/network-scan" },
          { title: "SSL/TLS Analysis", href: "/docs/ssl" },
          { title: "CVE Lookup", href: "/docs/cve" },
          { title: "XSS Detection", href: "/docs/xss" },
          { title: "SQL Injection", href: "/docs/sqli" },
          { title: "Open Redirect", href: "/docs/redirect" },
          { title: "RCE Detection", href: "/docs/rce" },
          { title: "Atomix", href: "/docs/atomix" },
          { title: "Web UI", href: "/docs/webui" },
          { title: "Social Engineering", href: "/docs/social-engineering" },
          { title: "NSE Scripts", href: "/docs/nse-scripts" },
        ],
      },
      {
        title: "Reference",
        items: [
          { title: "Reference Index", href: "/docs/reference" },
          { title: "FAQ", href: "/docs/faq" },
        ],
      },
    ],
  },
  id: {
    sections: [
      {
        title: "Memulai",
        items: [
          { title: "Beranda Dokumentasi", href: "/docs" },
          { title: "Memulai", href: "/docs/getting-started" },
          { title: "Instalasi", href: "/docs/installation" },
          { title: "Ikhtisar Arsitektur", href: "/docs/architecture" },
          { title: "Konfigurasi", href: "/docs/configuration" },
        ],
      },
      {
        title: "Panduan",
        items: [
          { title: "Ikhtisar Panduan", href: "/docs/guide" },
          { title: "Perintah CLI", href: "/docs/cli" },
          { title: "Pengembangan Modul", href: "/docs/modules" },
          { title: "Pembuatan Laporan", href: "/docs/reporting" },
        ],
      },
      {
        title: "Peralatan",
        items: [
          { title: "Pemindai Port", href: "/docs/port-scan" },
          { title: "Pencari Direktori", href: "/docs/dir-finder" },
          { title: "Audit Header", href: "/docs/header-audit" },
          { title: "Deteksi Teknologi", href: "/docs/tech-detection" },
          { title: "Web Fuzzer", href: "/docs/web-fuzzer" },
          { title: "Analisis JS", href: "/docs/js-analysis" },
          { title: "Penemuan Parameter", href: "/docs/params" },
          { title: "Bypass 403", href: "/docs/403bypass" },
          { title: "Enumerasi Subdomain", href: "/docs/subdomain" },
          { title: "Pemindai Jaringan", href: "/docs/network-scan" },
          { title: "Analisis SSL/TLS", href: "/docs/ssl" },
          { title: "Pencarian CVE", href: "/docs/cve" },
          { title: "Deteksi XSS", href: "/docs/xss" },
          { title: "SQL Injection", href: "/docs/sqli" },
          { title: "Redirect Terbuka", href: "/docs/redirect" },
          { title: "Deteksi RCE", href: "/docs/rce" },
          { title: "Atomix", href: "/docs/atomix" },
          { title: "Antarmuka Web", href: "/docs/webui" },
          { title: "Rekayasa Sosial", href: "/docs/social-engineering" },
          { title: "Skrip NSE", href: "/docs/nse-scripts" },
        ],
      },
      {
        title: "Referensi",
        items: [
          { title: "Indeks Referensi", href: "/docs/reference" },
          { title: "FAQ", href: "/docs/faq" },
        ],
      },
    ],
  },
  it: {
    sections: [
      {
        title: "Per Iniziare",
        items: [
          { title: "Home Documentazione", href: "/docs" },
          { title: "Guida Rapida", href: "/docs/getting-started" },
          { title: "Installazione", href: "/docs/installation" },
          { title: "Architettura", href: "/docs/architecture" },
          { title: "Configurazione", href: "/docs/configuration" },
        ],
      },
      {
        title: "Guide",
        items: [
          { title: "Panoramica Guida", href: "/docs/guide" },
          { title: "Comandi CLI", href: "/docs/cli" },
          { title: "Sviluppo Moduli", href: "/docs/modules" },
          { title: "Generazione Report", href: "/docs/reporting" },
        ],
      },
      {
        title: "Strumenti",
        items: [
          { title: "Scansione Porte", href: "/docs/port-scan" },
          { title: "Directory Finder", href: "/docs/dir-finder" },
          { title: "Audit Header", href: "/docs/header-audit" },
          { title: "Rilevamento Tecnologie", href: "/docs/tech-detection" },
          { title: "Web Fuzzer", href: "/docs/web-fuzzer" },
          { title: "Analisi JS", href: "/docs/js-analysis" },
          { title: "Scoperta Parametri", href: "/docs/params" },
          { title: "Bypass 403", href: "/docs/403bypass" },
          { title: "Enumerazione Sottodomini", href: "/docs/subdomain" },
          { title: "Scansione Rete", href: "/docs/network-scan" },
          { title: "Analisi SSL/TLS", href: "/docs/ssl" },
          { title: "Ricerca CVE", href: "/docs/cve" },
          { title: "Rilevamento XSS", href: "/docs/xss" },
          { title: "SQL Injection", href: "/docs/sqli" },
          { title: "Redirect Aperto", href: "/docs/redirect" },
          { title: "Rilevamento RCE", href: "/docs/rce" },
          { title: "Atomix", href: "/docs/atomix" },
          { title: "Interfaccia Web", href: "/docs/webui" },
          { title: "Ingegneria Sociale", href: "/docs/social-engineering" },
          { title: "Script NSE", href: "/docs/nse-scripts" },
        ],
      },
      {
        title: "Riferimento",
        items: [
          { title: "Indice Riferimento", href: "/docs/reference" },
          { title: "FAQ", href: "/docs/faq" },
        ],
      },
    ],
  },
  ru: {
    sections: [
      {
        title: "Начало работы",
        items: [
          { title: "Главная документации", href: "/docs" },
          { title: "Начало работы", href: "/docs/getting-started" },
          { title: "Установка", href: "/docs/installation" },
          { title: "Архитектура", href: "/docs/architecture" },
          { title: "Конфигурация", href: "/docs/configuration" },
        ],
      },
      {
        title: "Руководства",
        items: [
          { title: "Обзор руководства", href: "/docs/guide" },
          { title: "Команды CLI", href: "/docs/cli" },
          { title: "Разработка модулей", href: "/docs/modules" },
          { title: "Генерация отчётов", href: "/docs/reporting" },
        ],
      },
      {
        title: "Инструменты",
        items: [
          { title: "Сканер портов", href: "/docs/port-scan" },
          { title: "Поиск директорий", href: "/docs/dir-finder" },
          { title: "Аудит заголовков", href: "/docs/header-audit" },
          { title: "Определение технологий", href: "/docs/tech-detection" },
          { title: "Веб-фаззер", href: "/docs/web-fuzzer" },
          { title: "Анализ JS", href: "/docs/js-analysis" },
          { title: "Обнаружение параметров", href: "/docs/params" },
          { title: "Обход 403", href: "/docs/403bypass" },
          { title: "Перебор поддоменов", href: "/docs/subdomain" },
          { title: "Сканер сети", href: "/docs/network-scan" },
          { title: "Анализ SSL/TLS", href: "/docs/ssl" },
          { title: "Поиск CVE", href: "/docs/cve" },
          { title: "Обнаружение XSS", href: "/docs/xss" },
          { title: "SQL-инъекции", href: "/docs/sqli" },
          { title: "Открытый редирект", href: "/docs/redirect" },
          { title: "Обнаружение RCE", href: "/docs/rce" },
          { title: "Atomix", href: "/docs/atomix" },
          { title: "Веб-интерфейс", href: "/docs/webui" },
          { title: "Социальная инженерия", href: "/docs/social-engineering" },
          { title: "NSE-скрипты", href: "/docs/nse-scripts" },
        ],
      },
      {
        title: "Справочник",
        items: [
          { title: "Индекс справочника", href: "/docs/reference" },
          { title: "FAQ", href: "/docs/faq" },
        ],
      },
    ],
  },
  zh: {
    sections: [
      {
        title: "开始使用",
        items: [
          { title: "文档首页", href: "/docs" },
          { title: "快速开始", href: "/docs/getting-started" },
          { title: "安装", href: "/docs/installation" },
          { title: "架构概述", href: "/docs/architecture" },
          { title: "配置", href: "/docs/configuration" },
        ],
      },
      {
        title: "指南",
        items: [
          { title: "指南概览", href: "/docs/guide" },
          { title: "CLI命令", href: "/docs/cli" },
          { title: "模块开发", href: "/docs/modules" },
          { title: "报告生成", href: "/docs/reporting" },
        ],
      },
      {
        title: "工具",
        items: [
          { title: "端口扫描", href: "/docs/port-scan" },
          { title: "目录发现", href: "/docs/dir-finder" },
          { title: "标头审计", href: "/docs/header-audit" },
          { title: "技术检测", href: "/docs/tech-detection" },
          { title: "Web模糊测试", href: "/docs/web-fuzzer" },
          { title: "JS分析", href: "/docs/js-analysis" },
          { title: "参数发现", href: "/docs/params" },
          { title: "403绕过", href: "/docs/403bypass" },
          { title: "子域名枚举", href: "/docs/subdomain" },
          { title: "网络扫描", href: "/docs/network-scan" },
          { title: "SSL/TLS分析", href: "/docs/ssl" },
          { title: "CVE查询", href: "/docs/cve" },
          { title: "XSS检测", href: "/docs/xss" },
          { title: "SQL注入", href: "/docs/sqli" },
          { title: "开放重定向", href: "/docs/redirect" },
          { title: "RCE检测", href: "/docs/rce" },
          { title: "Atomix", href: "/docs/atomix" },
          { title: "Web界面", href: "/docs/webui" },
          { title: "社会工程", href: "/docs/social-engineering" },
          { title: "NSE脚本", href: "/docs/nse-scripts" },
        ],
      },
      {
        title: "参考",
        items: [
          { title: "参考索引", href: "/docs/reference" },
          { title: "常见问题", href: "/docs/faq" },
        ],
      },
    ],
  },
  ja: {
    sections: [
      {
        title: "はじめに",
        items: [
          { title: "ドキュメントホーム", href: "/docs" },
          { title: "クイックスタート", href: "/docs/getting-started" },
          { title: "インストール", href: "/docs/installation" },
          { title: "アーキテクチャ", href: "/docs/architecture" },
          { title: "設定", href: "/docs/configuration" },
        ],
      },
      {
        title: "ガイド",
        items: [
          { title: "ガイド概要", href: "/docs/guide" },
          { title: "CLIコマンド", href: "/docs/cli" },
          { title: "モジュール開発", href: "/docs/modules" },
          { title: "レポート生成", href: "/docs/reporting" },
        ],
      },
      {
        title: "ツール",
        items: [
          { title: "ポートスキャナー", href: "/docs/port-scan" },
          { title: "ディレクトリファインダー", href: "/docs/dir-finder" },
          { title: "ヘッダー監査", href: "/docs/header-audit" },
          { title: "技術検出", href: "/docs/tech-detection" },
          { title: "Webファザー", href: "/docs/web-fuzzer" },
          { title: "JS分析", href: "/docs/js-analysis" },
          { title: "パラメータ発見", href: "/docs/params" },
          { title: "403バイパス", href: "/docs/403bypass" },
          { title: "サブドメイン列挙", href: "/docs/subdomain" },
          { title: "ネットワークスキャナー", href: "/docs/network-scan" },
          { title: "SSL/TLS分析", href: "/docs/ssl" },
          { title: "CVE検索", href: "/docs/cve" },
          { title: "XSS検出", href: "/docs/xss" },
          { title: "SQLインジェクション", href: "/docs/sqli" },
          { title: "オープンリダイレクト", href: "/docs/redirect" },
          { title: "RCE検出", href: "/docs/rce" },
          { title: "Atomix", href: "/docs/atomix" },
          { title: "Web UI", href: "/docs/webui" },
          { title: "ソーシャルエンジニアリング", href: "/docs/social-engineering" },
          { title: "NSEスクリプト", href: "/docs/nse-scripts" },
        ],
      },
      {
        title: "リファレンス",
        items: [
          { title: "リファレンス索引", href: "/docs/reference" },
          { title: "FAQ", href: "/docs/faq" },
        ],
      },
    ],
  },
};

export const supportedLangs = ["en", "id", "it", "ru", "zh", "ja"];
