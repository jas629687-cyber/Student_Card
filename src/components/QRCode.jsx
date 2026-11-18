function QRCode({ studentId }) {
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${studentId}`;

  return (
    <div className="qr-section">
      <img src={qrUrl} alt="Student QR Code" />
      <p>Scan to Verify Student</p>
    </div>
  );
}

export default QRCode;