import React, {useState} from 'react';
import {Container, Row, Col, Image, Nav, Navbar, Button, Breadcrumb, ListGroup, Card, Badge} from 'react-bootstrap';
import {Navmenu} from "../Components/Navbar/Navbar.jsx";
import {FooterSection} from "../Components/LandingPageSection/FooterSection.jsx";
import {ChevronDown, ChevronUp} from 'react-bootstrap-icons';

const ScholarshipDetail = () => {
    const [collapsePersyaratan, setCollapsePersyaratan] = useState(true);
    const [collapseManfaat, setCollapseManfaat] = useState(true);
    const [collapsePendaftaran, setCollapsePendaftaran] = useState(true);
    const [collapseKontak, setCollapseKontak] = useState(true);

    const toggleCollapse = (section) => {
        switch (section) {
            case 'persyaratan':
                setCollapsePersyaratan(!collapsePersyaratan);
                break;
            case 'manfaat':
                setCollapseManfaat(!collapseManfaat);
                break;
            case 'pendaftaran':
                setCollapsePendaftaran(!collapsePendaftaran);
                break;
            case 'kontak':
                setCollapseKontak(!collapseKontak);
                break;
            default:
                break;
        }
    };

    return (
        <>
            <Navmenu/>
            <div className="App">
                <Container fluid className="App-main">
                    <Container>
                        <Breadcrumb className="my-4">
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="#">Beasiswa</Breadcrumb.Item>
                            <Breadcrumb.Item href="#">Irlandia</Breadcrumb.Item>
                            <Breadcrumb.Item active>Government of Ireland Postgraduate Scholarship Programme (GOI-PSP) S2</Breadcrumb.Item>
                        </Breadcrumb>
                        <Row className="justify-content-center">
                            <Col md={12}>
                                <h1>Government of Ireland Postgraduate Scholarship Programme (GOI-PSP) S2</h1>
                                <div className="mb-3">
                                    <Badge bg="info" className="App-label me-2">Partial Scholar</Badge>
                                    <Badge bg="primary" className="App-label me-2">S2</Badge>
                                    <Badge bg="success" className="App-label me-2">Irlandia</Badge>
                                </div>
                                <Card className="mb-3">
                                    <Card.Body className="d-flex align-items-center justify-content-between">
                                        <Badge bg="success" className="App-badge">Open Registration</Badge>
                                        <span className="App-deadline">Deadline: 21 Oktober 2023</span>
                                    </Card.Body>
                                </Card>
                                <Card className="mb-3">
                                    <Card.Body>
                                        <Card.Title className="App-title">Government of Ireland Postgraduate Scholarship Programme (GOI-PSP) S2</Card.Title>
                                        <Card.Text className="App-text">Program beasiswa ini ditawarkan oleh Pemerintah Irlandia untuk mahasiswa internasional yang ingin melanjutkan studi S2 di Irlandia. Beasiswa ini mencakup biaya kuliah, biaya hidup, dan biaya penelitian.</Card.Text>
                                        <Card.Subtitle className="App-subtitle">Universitas: Semua universitas di Irlandia yang terdaftar di situs resmi beasiswa <br/>
                                            Jurusan: Semua bidang studi, kecuali bidang kedokteran, kedokteran gigi, dan ilmu kesehatan lainnya</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                                <Card bg="light" className="mb-3">
                                    <Card.Header
                                        className="d-flex align-items-center justify-content-between bg-transparent border-bottom-0"
                                        onClick={() => toggleCollapse('persyaratan')}
                                        aria-expanded={collapsePersyaratan}
                                    >
                                        <h2>Persyaratan Umum</h2>
                                        {collapsePersyaratan ? (
                                            <ChevronDown />
                                        ) : (
                                            <ChevronUp />
                                        )}
                                    </Card.Header>
                                    <Card.Body
                                        id="collapsePersyaratan"
                                        className={`collapse ${collapsePersyaratan ? 'show' : ''} border-top-0`}
                                    >
                                        <ul className="list-unstyled list-bullet">
                                            <li>Warga negara non-UE/EEA yang udah lulus S1 di universitas yang diakui.</li>
                                            <li>Pingin S2 di Irlandia tahun akademik 2024/2025.</li>
                                            <li>Punya rekam jejak akademik bagus dan rencana penelitian jelas.</li>
                                            <li>Punya skill bahasa Inggris sesuai standar universitas tujuan.</li>
                                            <li>Nggak lagi dapet beasiswa full atau sebagian.</li>
                                        </ul>
                                    </Card.Body>
                                </Card>


                                <Card bg="light" className="mb-3">
                                    <Card.Header
                                        className="d-flex align-items-center justify-content-between bg-transparent border-bottom-0"
                                        onClick={() => toggleCollapse('manfaat')}
                                        aria-expanded={collapseManfaat}
                                    >
                                        <h2>Manfaat Beasiswa</h2>
                                        {collapseManfaat ? (
                                            <ChevronDown />
                                        ) : (
                                            <ChevronUp />
                                        )}
                                    </Card.Header>
                                    <Card.Body
                                        id="collapseManfaat"
                                        className={`collapse ${collapseManfaat ? 'show' : ''} border-top-0`}
                                    >
                                        <ul className="list-unstyled list-bullet">
                                            <li>Biaya kuliah penuh hingga maksimal €16.000 per tahun.</li>
                                            <li>Biaya hidup sebesar €1.200 per bulan.</li>
                                            <li>Biaya penelitian sebesar €3.250 per tahun.</li>
                                            <li>Durasi beasiswa maksimal 2 tahun untuk program S2.</li>
                                        </ul>
                                    </Card.Body>
                                </Card>

                                <Card bg="light" className="mb-3">
                                    <Card.Header
                                        className="d-flex align-items-center justify-content-between bg-transparent border-bottom-0"
                                        onClick={() => toggleCollapse('pendaftaran')}
                                        aria-expanded={collapsePendaftaran}
                                    >
                                        <h2>Cara Pendaftaran</h2>
                                        {collapsePendaftaran ? (
                                            <ChevronDown />
                                        ) : (
                                            <ChevronUp />
                                        )}
                                    </Card.Header>
                                    <Card.Body
                                        id="collapsePendaftaran"
                                        className={`collapse ${collapsePendaftaran ? 'show' : ''} border-top-0`}
                                    >
                                        <ol className="App-application list-number" style={{ listStyleType: "decimal" }}>
                                            <li>Mengidentifikasi dan menghubungi supervisor potensial di universitas tujuan di Irlandia. Supervisor harus bersedia untuk mendukung aplikasi beasiswa dan memberikan surat rekomendasi.</li>
                                            <li>Mengisi formulir aplikasi online di situs resmi beasiswa. Formulir aplikasi harus dilengkapi dengan dokumen pendukung, seperti ijazah, transkrip, surat rekomendasi, rencana penelitian, sertifikat bahasa Inggris, dan lain-lain.</li>
                                            <li>Mengirimkan aplikasi sebelum batas waktu yang ditentukan, yaitu 21 Oktober 2023 pukul 16.00 waktu Irlandia.</li>
                                            <li>Mengikuti proses seleksi yang meliputi penilaian akademik, penilaian rencana penelitian, dan wawancara jika diperlukan.</li>
                                            <li>Menunggu pengumuman hasil seleksi pada Maret 2024.</li>
                                        </ol>
                                    </Card.Body>
                                </Card>

                                <Card bg="light" className="mb-3">
                                    <Card.Header
                                        className="d-flex align-items-center justify-content-between bg-transparent border-bottom-0"
                                        onClick={() => toggleCollapse('kontak')}
                                        aria-expanded={collapseKontak}
                                    >
                                        <h2>Kontak dan Informasi Lengkap</h2>
                                        {collapseKontak ? (
                                            <ChevronDown />
                                        ) : (
                                            <ChevronUp />
                                        )}
                                    </Card.Header>
                                    <Card.Body
                                        id="collapseKontak"
                                        className={`collapse ${collapseKontak ? 'show' : ''} border-top-0`}
                                    >
                                        <p>Untuk informasi lebih lanjut tentang beasiswa ini, silakan kunjungi situs resmi beasiswa atau hubungi:</p>
                                        <p>Government of Ireland Postgraduate Scholarship Programme<br/>
                                            Email: postgrad@research.ie<br/>
                                            Phone: +353 1 2315000</p>
                                    </Card.Body>
                                </Card>

                            </Col>
                        </Row>
                    </Container>
                </Container>

            </div>
            <FooterSection/>

        </>
    );
};

export default ScholarshipDetail;
