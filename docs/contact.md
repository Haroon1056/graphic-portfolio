<form action="https://formspree.io/f/mblyrwyp" method="POST" class="designer-form">
  <h3 class="form-title">Let's create something amazing</h3>
  
  <div class="input-group">
    <input type="text" name="name" id="name" required>
    <label for="name">Your Name</label>
    <div class="underline"></div>
  </div>
  
  <div class="input-group">
    <input type="email" name="email" id="email" required>
    <label for="email">Email Address</label>
    <div class="underline"></div>
  </div>
  
  <div class="input-group">
    <select name="project" id="project">
      <option value=""></option>
      <option value="branding">Brand Identity</option>
      <option value="packaging">Packaging Design</option>
      <option value="print">Print Design</option>
    </select>
    <label for="project">Project Type</label>
    <div class="underline"></div>
  </div>
  
  <div class="input-group">
    <textarea name="message" id="message" rows="3" required></textarea>
    <label for="message">Tell me about your project</label>
    <div class="underline"></div>
  </div>
  
  <button type="submit" class="submit-btn">
    <span>Send Message</span>
    <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
  </button>
</form>

<style>
.designer-form {
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Inter', -apple-system, sans-serif;
  color: #333;
}

.form-title {
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
  letter-spacing: -0.5px;
}

.input-group {
  position: relative;
  margin-bottom: 2rem;
}

.input-group label {
  position: absolute;
  top: 12px;
  left: 0;
  transition: all 0.3s ease;
  pointer-events: none;
  color: #777;
}

.input-group input,
.input-group textarea,
.input-group select {
  width: 100%;
  padding: 12px 0;
  border: none;
  border-bottom: 1px solid #ddd;
  background: transparent;
  font-size: 16px;
  transition: all 0.3s ease;
}

.input-group select {
  appearance: none;
  cursor: pointer;
}

.input-group textarea {
  resize: vertical;
  min-height: 100px;
}

.input-group input:focus,
.input-group textarea:focus,
.input-group select:focus {
  outline: none;
  border-bottom-color: #000;
}

.input-group input:focus + label,
.input-group textarea:focus + label,
.input-group select:focus + label,
.input-group input:not(:placeholder-shown) + label,
.input-group textarea:not(:placeholder-shown) + label,
.input-group select:not([value=""]) + label {
  top: -15px;
  font-size: 12px;
  color: #000;
}

.underline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #000;
  transition: width 0.3s ease;
}

.input-group input:focus ~ .underline,
.input-group textarea:focus ~ .underline,
.input-group select:focus ~ .underline {
  width: 100%;
}

.submit-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 14px;
  background: #000;
  color: white;
  border: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  background: #333;
}

.submit-btn svg {
  width: 18px;
  height: 18px;
  fill: currentColor;
  transition: transform 0.3s ease;
}

.submit-btn:hover svg {
  transform: translateX(4px);
}

@media (max-width: 600px) {
  .designer-form {
    padding: 1rem;
  }
}
</style>