USE tadreeb_sis;

CREATE TABLE IF NOT EXISTS Internship (
    internshipID INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    company VARCHAR(255) NOT NULL,
    category VARCHAR(150),
    location VARCHAR(150),
    short_description TEXT,
    full_description LONGTEXT,
    requirements JSON,
    features JSON,
    image_url VARCHAR(500),
    application_link VARCHAR(500),
    duration VARCHAR(100),
    semester VARCHAR(50),
    deadline DATE,
    posted_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    slug VARCHAR(255) UNIQUE,
    is_verified BOOLEAN DEFAULT FALSE
);
