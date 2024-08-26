<template>
    <div class="con-form section">
        <div class="container-narrow">
            <div class="con-title">
                <h1>
                    <div class="">
                        Tell us
                    </div>

                    <div class="">
                        <i>about you</i>
                    </div>
                </h1>
            </div>
            <div class="con-form-main">
                <form action="">
                    <div class="form-row">
                        <p>I'm interested in paints for..</p>
                        <div class="radio-btns-wrapper">
                            <div class="radio-btns">
                                <input type="radio" id="indoors" name="paint">
                                <label for="indoors">Indoors</label>
                            </div>
                            <div class="radio-btns">
                                <input type="radio" id="outdoors" name="paint">
                                <label for="outdoors">Outdoors</label>
                            </div>
                        </div>                        
                    </div>
                    <div class="form-row">
                        <input type="text" name="name" placeholder="Name" required>
                    </div>
                    <div class="form-row">
                        <input type="email" name="email" placeholder="Email">
                    </div>
                    <div class="form-row">
                        <input type="tel" name="number" placeholder="Mobile Number">
                    </div>
                    <div class="form-row">
                        <input type="text" name="text" placeholder="Your Message">
                    </div>

                    <div class="con-form-submit">
                        <p>By submitting the form, you agree to our <strong>Terms and Conditions</strong> & <strong>Privacy Policy</strong></p>
                        <Button buttonText="Submit"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style src="./Contactform.scss" scoped>

</style>