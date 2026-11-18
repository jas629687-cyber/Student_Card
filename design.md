
# UniCard – UI/UX Design Document

## 1. Design Overview
UniCard follows a modern, clean and professional
interface design.

The interface uses reusable components to maintain
consistency throughout the application.

## 2. Color Palette

| Element | Color | Hex Code |
|---|---|---|
| Primary | Navy Blue | #172554 |
| Secondary | Blue | #2563EB |
| Background | Light Gray | #EEF2F8 |
| Card | White | #FFFFFF |
| Success | Green | #16A34A |
| Text | Dark Gray | #333333 |

## 3. Typography
- Font Family: Arial / Poppins
- Heading: Bold
- Subheading: Semi-bold
- Body: Regular

## 4. Main Pages

### Dashboard
- Application title.
- Student card collection.
- Search bar.
- Student information overview.

### Student ID Card
- College name and logo.
- Student photograph.
- Student name.
- Student ID.
- Department.
- Academic year.
- QR code.
- Student status.

### Student Details
- Complete student profile.
- Academic information.
- Activity status.

## 5. Reusable Components

### CardHeader
Displays the college name and card title.

### StudentProfile
Displays student photograph and personal details.

### QRCode
Displays the QR code for student identification.

### StatusBadge
Displays student status using colored labels.

### StudentCard
Combines all the smaller components into
one complete student ID card.

## 6. Layout Structure

Dashboard
  |
  |-- Search Bar
  |
  |-- Student Card Collection
        |
        |-- StudentCard
        |     |-- CardHeader
        |     |-- StudentProfile
        |     |-- QRCode
        |     |-- StatusBadge
        |
        |-- StudentCard
              |-- CardHeader
              |-- StudentProfile
              |-- QRCode
              |-- StatusBadge

## 7. Responsive Design
- Desktop: Multiple cards in a row.
- Tablet: Two cards per row.
- Mobile: One card per row.

## 8. Design Principles
- Simple navigation.
- Consistent spacing.
- Reusable UI elements.
- Clear typography.
- Professional appearance.
- Mobile-friendly interface.

## 9. User Experience Goal
Provide a simple and attractive digital
student identity card experience.
