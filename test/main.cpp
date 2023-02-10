/*
 * GLUT Shapes Demo
 *
 * Written by Nigel Stewart November 2003
 *
 * This program is test harness for the sphere, cone
 * and torus shapes in GLUT.
 *
 * Spinning wireframe and smooth shaded shapes are
 * displayed until the ESC or q key is pressed.  The
 * number of geometry stacks and slices can be adjusted
 * using the + and - keys.
 */

#ifdef __APPLE__
#include <GLUT/glut.h>
#else
#include <GL/glut.h>
#endif
#include <stdlib.h>
#include <math.h>
#include <GL/glut.h>

static int slices = 16;
static int stacks = 16;
static float bosoo = 0, hevtee = 1;
static float zoom = 1;

/* GLUT callback Handlers */

static void resize(int width, int height)
{
    const float ar = (float) width / (float) height;

    glViewport(0, 0, width, height);
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    //glFrustum(-ar, ar, -1.0, 1.0, 2.0, 100.0);
    gluOrtho2D(-5, 5, -5, 5);
    glMatrixMode(GL_MODELVIEW);
    glLoadIdentity() ;
}

static void display(void)
{
    const double t = glutGet(GLUT_ELAPSED_TIME) / 1000.0;
    const double a = t*90.0;

    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

    glColor3d(0.8, 0.4, 0);
    glBegin(GL_POLYGON);
        glVertex2f(-0.7*zoom+hevtee, -1.0*zoom);
        glVertex2f(0.7*zoom+hevtee, -1.0*zoom);
        glVertex2f(0.7*zoom+hevtee, 1.0*zoom);
        glVertex2f(-0.7*zoom+hevtee, 1.0*zoom);
    glEnd();

    glColor3d(0.9, 0.9, 0.9);
    glBegin(GL_POLYGON);
        glVertex2f(-3.0*zoom, -1.0*zoom);
        glVertex2f(3.0*zoom, -1.0*zoom);
        glVertex2f(3.0*zoom, 1.0*zoom);
        glVertex2f(-3.0*zoom, 1.0*zoom);
    glEnd();

    glBegin(GL_POLYGON);
        glVertex2f(-3.0*zoom, 1.0*zoom);
        glVertex2f(3.0*zoom, 1.0*zoom);
        glVertex2f(0.5*zoom, 2.5*zoom);
        glVertex2f(-0.5*zoom, 2.5*zoom);
    glEnd();

    glColor3d(0, 0.8, 0);
    glBegin(GL_POLYGON);
        glVertex2f(-5.0, -5.0);
        glVertex2f(5.0, -5.0);
        glVertex2f(5.0, 2.0*pow(zoom, 1.5));
        glVertex2f(-5.0, 2.0*pow(zoom, 1.5));
    glEnd();

    glColor3d(0.2, 0.8, 1);
    glBegin(GL_POLYGON);
        glVertex2f(-5.0, 2.0*pow(zoom, 1.5));
        glVertex2f(5.0, 2.0*pow(zoom, 1.5));
        glVertex2f(5.0, 5.0);
        glVertex2f(-5.0, 5.0);
    glEnd();

    glBegin(GL_POLYGON);

    glEnd();

    glutSwapBuffers();
}


static void key(unsigned char key, int x, int y)
{
    switch (key)
    {
        case 27:
        case 'q':
            exit(0);
            break;

        case '+':
            zoom *= 1.05;
            break;

        case '-':
            zoom /= 1.05;
            break;
    }

    glutPostRedisplay();
}

static void spkey(int key, int x, int y) {
    switch (key) {
        case GLUT_KEY_UP :
            bosoo += 0.5;
            break;
        case GLUT_KEY_DOWN :
            bosoo -= 0.5;
            break;
        case GLUT_KEY_LEFT :
            hevtee /= 1.1;
            break;
        case GLUT_KEY_RIGHT :
            hevtee *= 1.1;
            break;
    }
}

static void idle(void)
{
    glutPostRedisplay();
}

const GLfloat light_ambient[]  = { 0.0f, 0.0f, 0.0f, 1.0f };
const GLfloat light_diffuse[]  = { 1.0f, 1.0f, 1.0f, 1.0f };
const GLfloat light_specular[] = { 1.0f, 1.0f, 1.0f, 1.0f };
const GLfloat light_position[] = { 2.0f, 5.0f, 5.0f, 0.0f };

const GLfloat mat_ambient[]    = { 0.7f, 0.7f, 0.7f, 1.0f };
const GLfloat mat_diffuse[]    = { 0.8f, 0.8f, 0.8f, 1.0f };
const GLfloat mat_specular[]   = { 1.0f, 1.0f, 1.0f, 1.0f };
const GLfloat high_shininess[] = { 100.0f };

/* Program entry point */

int main(int argc, char *argv[])
{
    glutInit(&argc, argv);
    glutInitWindowSize(640,640);
    glutInitWindowPosition(10,10);
    glutInitDisplayMode(GLUT_RGB | GLUT_DOUBLE | GLUT_DEPTH);

    glutCreateWindow("GLUT Shapes");

    glutReshapeFunc(resize);
    glutDisplayFunc(display);
    glutKeyboardFunc(key);
    glutSpecialFunc(spkey);
    glutIdleFunc(idle);

    glClearColor(0,0,0,0);
    glEnable(GL_CULL_FACE);
    glCullFace(GL_BACK);

    glEnable(GL_DEPTH_TEST);
    glDepthFunc(GL_LESS);

    glEnable(GL_LIGHT0);
    glEnable(GL_NORMALIZE);
    glEnable(GL_COLOR_MATERIAL);
    glEnable(GL_LIGHTING);

    glLightfv(GL_LIGHT0, GL_AMBIENT,  light_ambient);
    glLightfv(GL_LIGHT0, GL_DIFFUSE,  light_diffuse);
    glLightfv(GL_LIGHT0, GL_SPECULAR, light_specular);
    glLightfv(GL_LIGHT0, GL_POSITION, light_position);

    glMaterialfv(GL_FRONT, GL_AMBIENT,   mat_ambient);
    glMaterialfv(GL_FRONT, GL_DIFFUSE,   mat_diffuse);
    glMaterialfv(GL_FRONT, GL_SPECULAR,  mat_specular);
    glMaterialfv(GL_FRONT, GL_SHININESS, high_shininess);

    glutMainLoop();

    return EXIT_SUCCESS;
}
