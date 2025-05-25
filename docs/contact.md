# Let's Work Together

Fill out the form below and I'll get back to you within 24 hours.

<form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
  <input type="hidden" name="form-name" value="contact">
  <p class="hidden">
    <label>Don't fill this out if you're human: <input name="bot-field"></label>
  </p>
  
  <div class="form-group">
    <label for="name">Your Name</label>
    <input type="text" id="name" name="name" required>
  </div>
  
  <div class="form-group">
    <label for="email">Email Address</label>
    <input type="email" id="email" name="email" required>
  </div>
  
  <div class="form-group">
    <label for="project">Project Type</label>
    <select id="project" name="project">
      <option value="branding">Brand Identity</option>
      <option value="packaging">Packaging Design</option>
      <option value="print">Print Design</option>
      <option value="web">Web Design</option>
      <option value="other">Other</option>
    </select>
  </div>
  
  <div class="form-group">
    <label for="message">Project Details</label>
    <textarea id="message" name="message" rows="5" required></textarea>
  </div>
  
  <div class="form-group">
    <label for="budget">Estimated Budget</label>
    <select id="budget" name="budget">
      <option value="under-1k">Under $1,000</option>
      <option value="1k-3k">$1,000 - $3,000</option>
      <option value="3k-5k">$3,000 - $5,000</option>
      <option value="5k-plus">$5,000+</option>
    </select>
  </div>
  
  <button type="submit" class="md-button md-button--primary">Send Message</button>
</form>

<style>
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }
  
  input, select, textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
  }
  
  textarea {
    min-height: 150px;
  }
  
  .hidden {
    position: absolute;
    left: -9999px;
  }
</style>