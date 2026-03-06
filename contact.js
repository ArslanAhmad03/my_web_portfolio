/* =============================================
   CONTACT FORM — VALIDATION & SUBMISSION
   ============================================= */

'use strict';

const form = document.getElementById('contactForm');
const toast = document.getElementById('successToast');
const submitBtn = document.getElementById('submitBtn');

if (!form) console.warn('contactForm not found in DOM');

/* ---- Show Toast notification ---- */
function showToast(message, isError = false) {
    const toastInner = toast.querySelector('.toast-inner');
    const toastIcon = toast.querySelector('.toast-icon');
    const toastMsg = document.getElementById('toastMessage');

    toastMsg.textContent = message;

    if (isError) {
        toastIcon.className = 'bx bx-x-circle toast-icon';
        toastIcon.style.color = '#ef4444';
    } else {
        toastIcon.className = 'bx bx-check-circle toast-icon';
        toastIcon.style.color = '';
    }

    toast.classList.add('show-toast');
    setTimeout(() => toast.classList.remove('show-toast'), 4500);
}

/* ---- Inline field validation ---- */
function validateField(input) {
    const hint = input.parentElement.querySelector('.field-hint');
    if (!hint) return true;

    input.setCustomValidity('');

    if (input.validity.valueMissing) {
        const label = input.labels?.[0]?.textContent?.replace('*', '').trim() || input.name;
        hint.textContent = `${label} is required.`;
        input.style.borderColor = '#ef4444';
        return false;
    }

    if (input.type === 'email' && input.validity.typeMismatch) {
        hint.textContent = 'Please enter a valid email address.';
        input.style.borderColor = '#ef4444';
        return false;
    }

    hint.textContent = '';
    input.style.borderColor = '';
    return true;
}

/* ---- Live validation on blur ---- */
form?.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
        const hint = input.parentElement.querySelector('.field-hint');
        if (hint && hint.textContent) {
            validateField(input);
        }
    });
});

/* ---- Form submission ---- */
form?.addEventListener('submit', function (e) {
    e.preventDefault();

    // Validate all required fields
    let isValid = true;
    form.querySelectorAll('[required]').forEach(input => {
        if (!validateField(input)) isValid = false;
    });

    if (!isValid) {
        showToast('Please fill in all required fields.', true);
        return;
    }

    // Show loading state
    const btnSpan = submitBtn.querySelector('span');
    const btnIcon = submitBtn.querySelector('i');
    const originalText = btnSpan.textContent;

    submitBtn.disabled = true;
    btnIcon.className = 'bx bx-loader-alt bx-spin';
    btnSpan.textContent = 'Sending...';

    // Simulate async submission (replace with actual backend/EmailJS integration)
    setTimeout(() => {
        submitBtn.disabled = false;
        btnIcon.className = 'bx bx-send';
        btnSpan.textContent = originalText;

        showToast('Message sent! I\'ll get back to you within 24 hours. 🚀');
        form.reset();

        // Clear any lingering hints
        form.querySelectorAll('.field-hint').forEach(h => h.textContent = '');
        form.querySelectorAll('input, textarea').forEach(el => el.style.borderColor = '');
    }, 1200);
});
